import express from "express";
import Project from "../models/Project.js";
import Skill from "../models/Skill.js";
const router = express.Router();

// Admin dashboard home
router.get("/", (req, res) => {
  res.render("admin_dashboard", { title: "Admin Dashboard" });
});


// List projects (populate skills)
router.get("/projects", async (req, res) => {
  const projects = await Project.find().populate("skills");
  res.render("projects_list", { title: "Projects", projects });
});


// Add project form (fetch all skills for selection)
router.get("/projects/add", async (req, res) => {
  const skills = await Skill.find();
  res.render("project_form", { title: "Add Project", skills, project: null });
});

// Add project POST (handle skills and screenshots)
router.post("/projects/add", async (req, res) => {
  const { title, description, link, date, skills, screenshots } = req.body;
  const screenshotsArr = screenshots ? (Array.isArray(screenshots) ? screenshots : screenshots.split(/[\n,]+/).map(s => s.trim()).filter(Boolean)) : [];
  await Project.create({
    title,
    description,
    link,
    date,
    skills: Array.isArray(skills) ? skills : skills ? [skills] : [],
    screenshots: screenshotsArr
  });
  res.redirect("/admin/projects");
});

// Edit project form
router.get("/projects/:id/edit", async (req, res) => {
  const project = await Project.findById(req.params.id);
  const skills = await Skill.find();
  res.render("project_form", { title: "Edit Project", project, skills });
});

// Edit project POST
router.post("/projects/:id/edit", async (req, res) => {
  const { title, description, link, date, skills, screenshots } = req.body;
  const screenshotsArr = screenshots ? (Array.isArray(screenshots) ? screenshots : screenshots.split(/[\n,]+/).map(s => s.trim()).filter(Boolean)) : [];
  await Project.findByIdAndUpdate(req.params.id, {
    title,
    description,
    link,
    date,
    skills: Array.isArray(skills) ? skills : skills ? [skills] : [],
    screenshots: screenshotsArr
  });
  res.redirect("/admin/projects");
});

// Delete project
router.post("/projects/:id/delete", async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.redirect("/admin/projects");
});

// List skills
router.get("/skills", async (req, res) => {
  const skills = await Skill.find();
  res.render("skills_list", { title: "Skills", skills });
});
// Add skill form
router.get("/skills/add", (req, res) => {
  res.render("skill_form", { title: "Add Skill", skill: null });
});
// Add skill POST
router.post("/skills/add", async (req, res) => {
  await Skill.create(req.body);
  res.redirect("/admin/skills");
});
// Edit skill form
router.get("/skills/:id/edit", async (req, res) => {
  const skill = await Skill.findById(req.params.id);
  res.render("skill_form", { title: "Edit Skill", skill });
});
// Edit skill POST
router.post("/skills/:id/edit", async (req, res) => {
  await Skill.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/admin/skills");
});
// Delete skill
router.post("/skills/:id/delete", async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);
  res.redirect("/admin/skills");
});

export default router; 