// src/app/api/homepage-settings/route.js
import { NextResponse } from "next/server";
import HomepageSettings from "@/models/HomepageSettings";
import { connectDB } from "@/lib/mongodb";
import { publicJson, withPublicDataTimeout } from "@/lib/publicApiResponse";

export const runtime = "nodejs";
export const revalidate = 300;

const fallbackHomepageSettings = {
  trustSection: {
    heading: "Reliable Building Repair & Waterproofing Experts",
    body: "We specialize in delivering high-quality waterproofing services, structural repair, and concrete rehabilitation solutions. With years of experience and advanced techniques, we ensure long-lasting protection and durability for your structures.",
  },
  locationSection: {
    heading: "Waterproofing Services in Lucknow",
    body: "We provide professional waterproofing and building repair services across Lucknow and nearby areas. Whether it's residential leakage issues or large-scale industrial flooring, our team ensures reliable and effective solutions.",
  },
  servicesSection: {
    heading: "Our Core Services",
  },
  testimonialsSection: {
    heading: "What Our Clients Say",
  },
  ctaSection: {
    heading: "Facing Leakage or Structural Issues?",
    subheading: "Get expert help today from trusted waterproofing contractors.",
    buttonText: "Book Free Inspection",
  },
};

export async function GET(req) {
  try {
    const settings = await withPublicDataTimeout(
      connectDB().then(() => HomepageSettings.findOne().lean()),
      "homepage settings"
    );
    return publicJson(settings || fallbackHomepageSettings, {}, req);
  } catch (error) {
    console.error("GET /api/homepage-settings error:", error);
    return publicJson(fallbackHomepageSettings, {
      headers: { "X-Fiable-Fallback": "homepage-settings" },
    }, req);
  }
}

export async function PUT(req) {
  try {
    await connectDB();
    const body = await req.json();

    const settings = await HomepageSettings.findOneAndUpdate({}, body, { 
      new: true, 
      upsert: true,
      runValidators: true 
    });
    
    return NextResponse.json(settings);
  } catch (error) {
    console.error("PUT /api/homepage-settings error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
