// src/models/HomepageSettings.js
import mongoose, { Schema, models } from "mongoose";

const HomepageSettingsSchema = new Schema(
  {
    trustSection: {
      heading: { type: String, default: "Reliable Building Repair & Waterproofing Experts" },
      body: { type: String, default: "We specialize in delivering high-quality waterproofing services, structural repair, and concrete rehabilitation solutions." },
    },
    locationSection: {
      heading: { type: String, default: "Waterproofing Services in Lucknow" },
      body: { type: String, default: "We provide professional waterproofing and building repair services across Lucknow and nearby areas." },
    },
    servicesSection: {
      heading: { type: String, default: "Our Specialized Services" },
      subheading: { type: String, default: "Fiable Building Solutions delivers engineering-driven construction services designed for durability, safety, and long-term performance." },
    },
    whyChooseUsSection: {
      heading: { type: String, default: "Why choose" },
      highlight: { type: String, default: "Fiable Building Solutions?" },
    },
    milestonesSection: {
      heading: { type: String, default: "At Fiable, we engineer the" },
      highlight: { type: String, default: "future of construction" },
      body: { type: String, default: "delivering reliable waterproofing, flooring, structural rehabilitation, and industrial solutions. With a skilled team of civil engineers and applicators, backed by advanced technology and trusted chemical partners, we guarantee precision, durability, and long-term value." },
    },
    testimonialsSection: {
      heading: { type: String, default: "What Our Clients Say" },
      subheading: { type: String, default: "Unlocking the Stories of Success: Hear What Our Clients Have to Say About Their Journey with Us" },
    },
    ctaSection: {
      heading: { type: String, default: "Facing Leakage or Structural Issues?" },
      subheading: { type: String, default: "Get expert help today from trusted waterproofing contractors." },
      buttonText: { type: String, default: "Book Free Inspection" },
      phone: { type: String, default: "+91 8069648411" },
      email: { type: String, default: "enquiry@fiableprojects.com" },
    },
    floatingCta: {
      text: { type: String, default: "Start Project" },
      link: { type: String, default: "/contact-us#project-form" },
      show: { type: Boolean, default: true },
    },
  },
  { timestamps: true }
);

export default models.HomepageSettings || mongoose.model("HomepageSettings", HomepageSettingsSchema);
