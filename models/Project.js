import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String },
  date: { type: Date, default: Date.now },
  skills: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }], // Array of Skill references
  screenshots: [{ type: String }] // Array of image/reference URLs
});

export default mongoose.model("Project", projectSchema);