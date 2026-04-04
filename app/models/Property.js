import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
  id: { type: Number, required: false },
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  tag: { type: String, default: "Residential" },
  category: { type: String, default: "residential" },
  price: { type: String, required: true },
  image: { type: String, required: true },
  note: { type: String },
  detailA: { type: String },
  detailB: { type: String },
  summary: { type: String },
  highlights: [{ type: String }],
  ctaLabel: { type: String, default: "Book Private Tour" },
  isFeatured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Property || mongoose.model("Property", PropertySchema);
