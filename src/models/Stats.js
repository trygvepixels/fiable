// models/Stats.js
import mongoose, { Schema, models } from "mongoose";

const StatsSchema = new Schema(
  {
    stats: [
      {
        value: { type: String, required: true },
        label: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

export default models.Stats || mongoose.model("Stats", StatsSchema);
