# Assignment 1: Project & Skills Admin Dashboard
# Project Setup & Running Instructions
## Backend (Admin/API - Express)
- The backend admin dashboard and API run on **port 3000** by default
- Example: http://localhost:3000/admin/skills
- To install dependencies for the backend, run:
   ```bash
   npm install in the project root folder.

## Frontend (React App)
- The frontend React app runs on **port 3001** by default.
- Example: http://localhost:3001/#home
- To install dependencies for the frontend, run:
   cd client
   npm install
   
## Start the App
1. Start the backend server from the root folder:
    npm start
   
2. Start the frontend React app from the `client` folder:
    npm start
    
Make sure both servers are running for full functionality.
## Overview
This is a Node.js/Express web application for managing projects and skills, using MongoDB and Mongoose. The admin dashboard allows you to add, view, and delete projects and skills. Projects can be tagged with skills/technologies and can include a screenshot/image URL.

## Features
- Add, view, and delete projects
- Add, view, and delete skills
- Tag projects with skills/technologies used
- Add a screenshot/image URL to projects
- Responsive, modern UI using Bootstrap and custom CSS
   
## File Structure
- `models/` - Mongoose models for Project and Skill
- `routes/` - Express route handlers
- `views/` - Pug templates for UI
- `public/` - Static assets (CSS)

## Notes
- Make sure your MongoDB Atlas cluster allows access from your IP or from anywhere (0.0.0.0/0) under Network Access.
- The app is modular and can be extended with more data types or features easily.

## Author
Pallavi Dhawan
