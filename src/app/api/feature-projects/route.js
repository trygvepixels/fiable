// /app/api/projects/route.js
import { NextResponse } from "next/server";
import FeatureProject from "@/models/FeatureProject";
import { connectDB } from "@/lib/mongodb";
import { publicJson, withPublicDataTimeout } from "@/lib/publicApiResponse";

export const runtime = "nodejs";
export const revalidate = 300;

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") || "20", 10)));
    const skip = (page - 1) * limit;

    const q = {};

    // 🔒 ALWAYS restrict to featured: false
    q.featured = true;

    const search = searchParams.get("search");
    if (search) {
      q.$or = [
        { title:  { $regex: search, $options: "i" } },
        { client: { $regex: search, $options: "i" } },
        { tags:   { $regex: search, $options: "i" } },
        { slug:   { $regex: search, $options: "i" } },
      ];
    }

    const tag = searchParams.get("tag");
    if (tag) q.tags = tag;

    const sort = searchParams.get("sort") || "-createdAt";

    const [items, total] = await withPublicDataTimeout(
      connectDB().then(() =>
        Promise.all([
          FeatureProject.find(q).sort(sort).skip(skip).limit(limit).lean(),
          FeatureProject.countDocuments(q),
        ])
      ),
      "feature projects"
    );

    return publicJson({
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
      items,
    }, {}, req);
  } catch (err) {
    console.error("GET /projects error:", err);
    return publicJson({ page: 1, limit: 0, total: 0, pages: 0, items: [] }, {
      headers: { "X-Fiable-Fallback": "feature-projects" },
    }, req);
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    if (!body.title || !body.slug) {
      return NextResponse.json(
        { error: "title and slug are required" },
        { status: 400 }
      );
    }

    if ((!body.gallery || body.gallery.length === 0) && Array.isArray(body.galleryImages)) {
      body.gallery = body.galleryImages.map((src) => ({ src, alt: "" }));
    }

    const created = await FeatureProject.create(body);
    return NextResponse.json(created, { status: 201 });
  } catch (err) {
    console.error("POST /projects error:", err);
    if (err?.code === 11000) {
      return NextResponse.json(
        { error: "Duplicate key", fields: err.keyValue },
        { status: 409 }
      );
    }
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}
