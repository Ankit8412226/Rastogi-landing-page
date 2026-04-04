import mongoose from "mongoose";

const AreaSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  tagline: { type: String },
  price: { type: String },
  image: { type: String },
  stats: { type: String },
  summary: { type: String },
  bullets: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Area || mongoose.model("Area", AreaSchema);
