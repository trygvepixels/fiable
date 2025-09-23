// models/Phone.js
import mongoose, { Schema, models } from "mongoose";

const PhoneSchema = new Schema(
  {
    primary: { type: String, required: true },
    secondary: { type: String, required: true }
  },
  { timestamps: true }
);

export default models.Phone || mongoose.model("Phone", PhoneSchema);
