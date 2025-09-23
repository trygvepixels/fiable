// src/app/api/phone/route.js
import { NextResponse } from "next/server";
 import Phone from "@/models/Phone";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  await connectDB();
  const phone = await Phone.findOne();
  return NextResponse.json(phone || {});
}

export async function PUT(req) {
  await connectDB();
  const body = await req.json();
  const phone = await Phone.findOneAndUpdate({}, body, {
    new: true,
    upsert: true,
  });
  return NextResponse.json(phone);
}
