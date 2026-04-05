import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Job from "@/models/Job";
import mongoose from "mongoose";

function isValidId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

export async function GET(_req, { params }) {
  try {
    await connectDB();
    const { id } = params;
    if (!isValidId(id)) return NextResponse.json({ error: "Invalid id" }, { status: 400 });

    const job = await Job.findById(id).lean();
    if (!job) return NextResponse.json({ error: "Not found" }, { status: 404 });

    return NextResponse.json(job);
  } catch (error) {
    console.error("GET /api/jobs/[id] error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  try {
    // Auth is handled by middleware
    await connectDB();
    const { id } = params;
    if (!isValidId(id)) return NextResponse.json({ error: "Invalid id" }, { status: 400 });

    const body = await request.json();

    const job = await Job.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true, runValidators: true }
    ).lean();

    if (!job) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(job);
  } catch (err) {
    console.error("PATCH /api/jobs/[id] error:", err);
    return NextResponse.json({ error: err.message || "Failed to update job" }, { status: 500 });
  }
}

export async function DELETE(_req, { params }) {
  try {
    // Auth is handled by middleware
    await connectDB();
    const { id } = params;
    if (!isValidId(id)) return NextResponse.json({ error: "Invalid id" }, { status: 400 });

    const job = await Job.findByIdAndDelete(id);
    if (!job) return NextResponse.json({ error: "Not found" }, { status: 404 });

    return NextResponse.json({ ok: true, message: "Job deleted successfully" });
  } catch (error) {
    console.error("DELETE /api/jobs/[id] error:", error);
    return NextResponse.json({ error: "Failed to delete job" }, { status: 500 });
  }
}
