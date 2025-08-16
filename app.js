import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

import adminRoutes from "./routes/admin.js";
import apiRoutes from "./routes/api.js";
import cors from "cors";

const app = express();

// For __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));


// Middleware
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Enable CORS for API
app.use("/api", cors(), apiRoutes);


// Routes
app.use("/admin", adminRoutes);

// Serve React build in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
  app.get("*", (req, res) => {
    // If the request doesn't match an API or admin route, serve React index.html
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}


// Redirect root to /admin (only in development)
if (process.env.NODE_ENV !== "production") {
  app.get("/", (req, res) => {
    res.redirect("/admin");
  });
}

// 404 handler
app.use((req, res) => {
  res.status(404).send("404 - Not Found");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 