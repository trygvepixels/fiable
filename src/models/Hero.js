// models/Hero.js
import mongoose, { Schema, models } from "mongoose";

const HeroSchema = new Schema(
  {
    title: { type: String, required: true },
    rotatingWords: [{ type: String, required: true }], 
    backgroundImages: [{ type: String, required: true }], // multiple Cloudinary URLs
    ctaPhone: { type: String },
    ctaWhatsapp: { type: String },
  },
  { timestamps: true }
);

export default models.Hero || mongoose.model("Hero", HeroSchema);
