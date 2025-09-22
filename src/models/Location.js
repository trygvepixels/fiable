import mongoose from "mongoose";

const locationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },
    type: {
      type: String,
      enum: [
        "head-office",
        "branch",
        "meeting-space",
        "project-office",
        "service-center",
      ],
      required: true,
    },
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      country: { type: String },
      pincode: { type: String },
    },
  },
  { timestamps: true }
);

export default mongoose.models.Location ||
  mongoose.model("Location", locationSchema);
