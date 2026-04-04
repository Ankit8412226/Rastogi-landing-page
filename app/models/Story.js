import mongoose from "mongoose";

const StorySchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  tag: { type: String },
  image: { type: String },
  time: { type: String, default: "Recently" },
  excerpt: { type: String },
  body: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Story || mongoose.model("Story", StorySchema);
