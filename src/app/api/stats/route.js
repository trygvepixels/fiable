// src/app/api/stats/route.js
import { NextResponse } from "next/server";
 import Stats from "@/models/Stats";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  await connectDB();
  const stats = await Stats.findOne();
  return NextResponse.json(stats || {});
}

export async function PUT(req) {
  await connectDB();
  const body = await req.json();
  const stats = await Stats.findOneAndUpdate({}, body, { new: true, upsert: true });
  return NextResponse.json(stats);
}
