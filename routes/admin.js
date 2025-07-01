import express from "express";
import Project from "../models/Project.js";
import Skill from "../models/Skill.js";
const router = express.Router();

// Admin dashboard home
router.get("/", (req, res) => {
  res.render("admin_dashboard", { title: "Admin Dashboard" });
});

// --- Projects ---
// List projects
router.get("/projects", async (req, res) => {
  const projects = await Project.find();
  res.render("projects_list", { title: "Projects", projects });
});
// Add project form
router.get("/projects/add", (req, res) => {
  res.render("project_form", { title: "Add Project" });
});
// Add project POST
router.post("/projects/add", async (req, res) => {
  await Project.create(req.body);
  res.redirect("/admin/projects");
});
// Delete project
router.post("/projects/:id/delete", async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.redirect("/admin/projects");
});

// --- Skills ---
// List skills
router.get("/skills", async (req, res) => {
  const skills = await Skill.find();
  res.render("skills_list", { title: "Skills", skills });
});
// Add skill form
router.get("/skills/add", (req, res) => {
  res.render("skill_form", { title: "Add Skill" });
});
// Add skill POST
router.post("/skills/add", async (req, res) => {
  await Skill.create(req.body);
  res.redirect("/admin/skills");
});
// Delete skill
router.post("/skills/:id/delete", async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);
  res.redirect("/admin/skills");
});

export default router; 