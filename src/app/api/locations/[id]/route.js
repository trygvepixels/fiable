// src/app/api/locations/[id]/route.js
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Location from "@/models/Location";
import { connectDB } from "@/lib/mongodb";

export async function GET(_req, { params }) {
  await connectDB();
  try {
    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json({ success: false, message: "Invalid ID" }, { status: 400 });
    }
    const doc = await Location.findById(params.id).lean();
    if (!doc) return NextResponse.json({ success: false, message: "Not found" }, { status: 404 });

    return NextResponse.json({ success: true, data: { ...doc, _id: doc._id.toString() } });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  await connectDB();
  try {
    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json({ success: false, message: "Invalid ID" }, { status: 400 });
    }

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

    const updated = await Location.findByIdAndUpdate(params.id, payload, { new: true }).lean();
    if (!updated) return NextResponse.json({ success: false, message: "Not found" }, { status: 404 });

    return NextResponse.json({ success: true, data: { ...updated, _id: updated._id.toString() } });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}

export async function DELETE(_req, { params }) {
  await connectDB();
  try {
    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json({ success: false, message: "Invalid ID" }, { status: 400 });
    }

    const deleted = await Location.findByIdAndDelete(params.id);
    if (!deleted) {
      return NextResponse.json({ success: false, message: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
