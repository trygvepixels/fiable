import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";
import { publicJson, withPublicDataTimeout } from "@/lib/publicApiResponse";

export const runtime = "nodejs";
export const revalidate = 300;

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") || "20", 10)));
    const sort = searchParams.get("sort") || "order createdAt";

    const q = {};
    if (searchParams.get("active") !== "false") q.active = true;

    const items = await withPublicDataTimeout(
      connectDB().then(() => Testimonial.find(q).sort(sort).limit(limit).lean()),
      "testimonials"
    );
    return publicJson({ items }, {}, req);
  } catch (e) {
    console.error("GET /testimonials error:", e);
    return publicJson({ items: [] }, {
      headers: { "X-Fiable-Fallback": "testimonials" },
    }, req);
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    if (!body.name || !body.message) {
      return NextResponse.json({ error: "name and message are required" }, { status: 400 });
    }

    const created = await Testimonial.create(body);
    return NextResponse.json(created, { status: 201 });
  } catch (e) {
    console.error("POST /testimonials error:", e);
    return NextResponse.json({ error: "Failed to create testimonial" }, { status: 500 });
  }
}
