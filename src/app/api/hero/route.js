// src/app/api/hero/route.js
import { NextResponse } from "next/server";
import Hero from "@/models/Hero";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();
    const hero = await Hero.findOne().lean();
    return NextResponse.json(hero || {});
  } catch (error) {
    console.error("GET /api/hero error:", error);
    return NextResponse.json({ error: "Failed to fetch hero data" }, { status: 500 });
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
