import express from "express";
import Project from "../models/Project.js";
import Skill from "../models/Skill.js";
const router = express.Router();

// GET /api/projects - return all projects as JSON
router.get("/projects", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// GET /api/skills - return all skills as JSON
router.get("/skills", async (req, res) => {
  const skills = await Skill.find();
  res.json(skills);
});

export default router; 