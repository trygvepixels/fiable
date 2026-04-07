// models/Hero.js
import mongoose, { Schema, models } from "mongoose";

const HeroSchema = new Schema(
  {
    title: { type: String, required: true },
    rotatingWords: [{ type: String, required: true }], 
    backgroundImages: [{ type: String, required: true }], // multiple Cloudinary URLs
    description: { type: String },
    ctaPhone: { type: String },
    ctaWhatsapp: { type: String },
    cta1Text: { type: String, default: "Get Free Site Inspection" },
    cta1Link: { type: String, default: "/contact-us#project-form" },
    cta2Text: { type: String, default: "Request a Quote" },
    cta2Link: { type: String, default: "/contact-us" },
  },
  { timestamps: true }
);

export default models.Hero || mongoose.model("Hero", HeroSchema);
