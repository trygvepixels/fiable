import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function clean(s) {
  if (typeof s !== "string") return "";
  return s.replace(/\s+/g, " ").trim();
}

function isEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s || "");
}

export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));

    console.log("contact form", body);

    const payload = {
      name: clean(body.name || body.fullName),
      email:       clean(body.email),
      phone:       clean(body.phone || body.whatsapp),
      company:     clean(body.company || body.brand),
      projectType: clean(body.projectType),
      location:    clean(body.location || body.cityCountry),
      budget:      clean(body.budget),
      timeline:    clean(body.timeline),
      message:     clean(body.message || body.brief),
      consent:     clean(body.consent || ""),
      page:        clean(body.page),
      utm:         typeof body.utm === "object" ? body.utm : undefined,
      submittedAt: new Date().toISOString(),
      userAgent:   req.headers.get("user-agent") || "",
      referer:     req.headers.get("referer") || "",
      ip:          req.headers.get("x-forwarded-for") || "",
    };

    // 1. Honeypot check (website field should be empty)
    if (clean(body.website)) {
      console.warn("Spam detected: Honeypot filled", { ip: payload.ip, website: body.website });
      return NextResponse.json({ ok: true }, { status: 202 }); // Silent discard
    }

    // 2. Speed check (humans shouldn't fill this in < 3 seconds)
    const startTime = Number(body._st);
    const now = Date.now();
    if (startTime && (now - startTime < 3000)) {
      console.warn("Spam detected: Submission too fast", { duration: now - startTime });
      return NextResponse.json({ ok: true }, { status: 202 }); // Silent discard
    }

    // 3. Gibberish / Random String Detection
    const isGibberish = (s) => /^[a-zA-Z]{10,}$/.test(s) && !/[aeiou]/i.test(s); // 10+ chars with no vowels
    if (isGibberish(payload.name) || isGibberish(payload.message.split(' ')[0])) {
      console.warn("Spam detected: Gibberish content", { name: payload.name });
      return NextResponse.json({ ok: true }, { status: 202 }); // Silent discard
    }

    // 4. Basic Validation
    if (!payload.name || !isEmail(payload.email) || !payload.phone || !payload.location || !payload.projectType || !payload.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 5. Phone Length Validation (bots often send short or random numbers)
    const digitsOnly = payload.phone.replace(/\D/g, "");
    if (digitsOnly.length < 10) {
      return NextResponse.json({ error: "Please provide a valid phone number" }, { status: 400 });
    }

    const GAS_URL   = process.env.GOOGLE_APPS_SCRIPT_URL;
    const GAS_TOKEN = process.env.GOOGLE_APPS_SCRIPT_TOKEN || "";

    if (!GAS_URL) {
      return NextResponse.json({ error: "Server not configured (GAS URL missing)" }, { status: 500 });
    }

    const res = await fetch(GAS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(GAS_TOKEN ? { "X-API-KEY": GAS_TOKEN } : {}),
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("Upstream error", text);
      return NextResponse.json({ error: "Upstream error", detail: text }, { status: 502 });
    }

    // 6. Send Email Notification (Non-blocking or catch errors)
    try {
      const { sendInquiryEmail } = await import("@/lib/mail");
      // Use await to ensure it's logged, but don't fail the request if mail fails
      await sendInquiryEmail(payload);
    } catch (mailErr) {
      console.error("Mail notification failed:", mailErr);
    }

    return NextResponse.json({ ok: true }, {
      status: 201,
      headers: { "Access-Control-Allow-Origin": "*" },
    });

  } catch (err) {
    console.error("POST /api/contact error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}