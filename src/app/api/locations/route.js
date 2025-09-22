// src/app/api/locations/route.js
import { NextResponse } from "next/server";
 import Location from "@/models/Location";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  await connectDB();
  try {
    const locations = await Location.find({}).sort({ createdAt: -1 }).lean();

    // ensure _id is always string
    const formatted = locations.map((loc) => ({
      ...loc,
      _id: loc._id.toString(),
    }));

    return NextResponse.json(formatted);
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  await connectDB();
  try {
    const body = await req.json();
    const payload = {
      name: body.name,
      type: body.type,
      address: body.address || {
        street: body.street,
        city: body.city,
        state: body.state,
        country: body.country,
        pincode: body.pincode,
      },
    };

    const doc = await Location.create(payload);
    return NextResponse.json(
      { success: true, data: { ...doc.toObject(), _id: doc._id.toString() } },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}
