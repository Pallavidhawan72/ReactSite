# Assignment 1: Project & Skills Admin Dashboard

## Overview
This is a Node.js/Express web application for managing projects and skills, using MongoDB and Mongoose. The admin dashboard allows you to add, view, and delete projects and skills. Projects can be tagged with skills/technologies and can include a screenshot/image URL.

## Features
- Add, view, and delete projects
- Add, view, and delete skills
- Tag projects with skills/technologies used
- Add a screenshot/image URL to projects
- Responsive, modern UI using Bootstrap and custom CSS

## Setup
1. Clone the repository and install dependencies:
   ```sh
   npm install
   ```
2. Create a `.env` file with your MongoDB connection string and desired port:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```
3. Start the server:
   ```sh
   npm start
   ```
   Or for development with auto-reload:
   ```sh
   npm run dev
   ```
4. Visit `http://localhost:3000` in your browser.

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
