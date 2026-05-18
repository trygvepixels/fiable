import { NextResponse } from "next/server";
import ClientLogo from "@/models/ClientLogo";
import { connectDB } from "@/lib/mongodb";
import { publicJson, withPublicDataTimeout } from "@/lib/publicApiResponse";

export const runtime = "nodejs";
export const revalidate = 300;

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit") || "50", 10);
    const sort = searchParams.get("sort") || "order";
    const items = await withPublicDataTimeout(
      connectDB().then(() =>
        ClientLogo.find({ active: true })
          .sort(sort)
          .limit(limit)
          .lean()
      ),
      "client logos"
    );
    return publicJson({ items }, {}, req);
  } catch (e) {
    console.error("GET /client-logos error:", e);
    return publicJson({ items: [] }, {
      headers: { "X-Fiable-Fallback": "client-logos" },
    }, req);
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    if (!body.name || !body.image?.src) {
      return NextResponse.json({ error: "name and image.src required" }, { status: 400 });
    }
    const created = await ClientLogo.create(body);
    return NextResponse.json(created, { status: 201 });
  } catch (e) {
    console.error("POST /client-logos error:", e);
    return NextResponse.json({ error: "Failed to create logo" }, { status: 500 });
  }
}
