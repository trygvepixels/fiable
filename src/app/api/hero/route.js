// src/app/api/hero/route.js
import { NextResponse } from "next/server";
import Hero from "@/models/Hero";
import { connectDB } from "@/lib/mongodb";
import { publicJson, withPublicDataTimeout } from "@/lib/publicApiResponse";

export const runtime = "nodejs";
export const revalidate = 300;

export const fallbackHero = {
  title: "Engineering the future of construction",
  rotatingWords: ["waterproofing", "repair", "flooring", "rehabilitation"],
  backgroundImages: ["/image.png"],
  description:
    "Expert solutions for waterproofing, roof leakage repair, structural rehabilitation, and industrial flooring for residential, commercial, and industrial projects.",
  cta1Text: "Get Free Site Inspection",
  cta1Link: "/contact-us#project-form",
  cta2Text: "Request a Quote",
  cta2Link: "/contact-us",
};

export async function GET(req) {
  try {
    const hero = await withPublicDataTimeout(
      connectDB().then(() => Hero.findOne().lean()),
      "hero"
    );
    return publicJson(hero || fallbackHero, {}, req);
  } catch (error) {
    console.error("GET /api/hero error:", error);
    return publicJson(fallbackHero, {
      headers: { "X-Fiable-Fallback": "hero" },
    }, req);
  }
}

export async function POST(req) {
  try {
    // Auth is handled by middleware
    await connectDB();
    const body = await req.json();

    if (!body.title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const hero = await Hero.create(body);
    return NextResponse.json(hero, { status: 201 });
  } catch (error) {
    console.error("POST /api/hero error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    // Auth is handled by middleware
    await connectDB();
    const body = await req.json();

    if (!body.title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const hero = await Hero.findOneAndUpdate({}, body, { 
      new: true, 
      upsert: true,
      runValidators: true 
    });
    
    return NextResponse.json(hero);
  } catch (error) {
    console.error("PUT /api/hero error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
