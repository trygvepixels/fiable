// src/app/api/hero/route.js
import { NextResponse } from "next/server";
import Hero from "@/models/Hero";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  await connectDB();
  const hero = await Hero.findOne();
  return NextResponse.json(hero || {});
}

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const hero = await Hero.create(body);
  return NextResponse.json(hero);
}

export async function PUT(req) {
  await connectDB();
  const body = await req.json();
  const hero = await Hero.findOneAndUpdate({}, body, { new: true, upsert: true });
  return NextResponse.json(hero);
}
