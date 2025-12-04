# LearnHub
1. Project Title
●
LearnHub – Your Personalized Web Dev & DSA Learning Platform
2. Problem Statement
Beginners who want to learn Web Development or Data Structures & Algorithms (DSA)
often struggle to find a clear, organized learning path.
They jump between YouTube, MDN, and random blogs — wasting time and losing
motivation.
3. System Architecture
Frontend (React) → Backend (Express API) → Database (MySQL)
Layer Technology
Frontend React.js, React Router, TailwindCSS
Backend Node.js, Express.js
Database MySQL (Relational Database)
ORM / Query
Tool
Sequelize ORM or Prisma ORM
Authentication JWT-based login/signup (admin & learner roles)
Hosting Frontend: Vercel  Backend: Render :
PlanetScale / Aiven / ClearDB
4. Key Features
Category Features
Authentication &
Authorization
Signup/Login using JWT, role-based access (admin/learner)
CRUD Operations Learning Topics Filtering, Searching, Sorting Pagination Frontend Routing Progress Tracking Hosting Admin can create, update, delete topics/roadmaps; users can
mark progress
Each topic has title, content, category, difficulty, and
resources
Users can search topics (e.g.,
or category
“Promises”), filter by difficulty
Topic list is paginated for performance
Pages: Home, Login, Roadmaps, Topic Details, Dashboard
Users can mark topics as “Completed”
Both backend and frontend deployed online
5. Tech Stack
Layer Technologies
Frontend React.js, React Router, Axios, TailwindCSS
Backend Node.js, Express.js
Database MongoDB (Mongoose ORM)
Authentication JWT (JSON Web Token)
Hosting Vercel (Frontend), Render/Railway (Backend), MongoDB Atlas (Database)
6. API Overview
Endpoint Method Description Access
/api/auth/signup POST Register a new user Public
/api/auth/login POST Authenticate user and return token Public
/api/topics GET Get all topics (supports search, filter,
sort, paginate)
Authenticate
d
/api/topics/:id GET Get topic details Authenticate
d
Admin
/api/topics POST Add new topic (title, content, difficulty,
resources)
/api/topics/:id PUT Update topic Admin
/api/topics/:id DELETE Delete topic Admin
/api/progress/:topicId POST Mark topic as completed Authenticate
d
Public
/api/roadmaps GET Get roadmap by category (Web Dev /
DSA)
