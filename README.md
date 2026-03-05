For a company assessment, your README should show three things clearly: 1. You understand architecture 2. You can explain security decisions 3. Someone can run the project in 2 minutes

Most candidates mess this up by writing a generic README. Don’t do that. Make it structured like a real project.

Below is a clean, professional README you can paste directly into login-app/README.md.

⸻

:::writing{variant=“standard” id=“48216”}

Login Application (React + Node.js)

A simple full-stack login application built using React for the frontend and Node.js + Express for the backend.
The application validates user credentials through an API and redirects authenticated users to a welcome page.

This project was developed as part of a technical assessment to demonstrate full-stack development skills including authentication, API design, and security practices.

⸻

Features
• User login with username and password
• API-based authentication
• Redirect to Welcome page after successful login
• Error handling for invalid credentials
• Password hashing using bcrypt
• Rate limiting to prevent brute force attacks
• Environment variables for secure configuration
• Responsive login UI built with React + TailwindCSS
• Loading state and password visibility toggle

⸻

Tech Stack

Frontend
• React (Functional Components + Hooks)
• React Router
• Tailwind CSS
• Fetch API

Backend
• Node.js
• Express.js
• bcrypt (password hashing)
• express-rate-limit (security)
• dotenv (environment variables)
• cors
• helmet (basic HTTP security)

⸻

Project Structure

login-app
│
├── backend
│ ├── server.js
│ ├── package.json
│ └── .env
│
├── frontend
│ ├── public
│ ├── src
│ │ ├── App.js
│ │ ├── Login.js
│ │ ├── Welcome.js
│ │ └── index.js
│ └── package.json
│
├── .gitignore
└── README.md

⸻

Installation & Setup

1. Clone the repository

git clone https://github.com/your-username/login-app.git
cd login-app

⸻

Backend Setup

Navigate to backend folder

cd backend

Install dependencies

npm install

Create a .env file

PORT=5000
USERNAME=admin
PASSWORD_HASH=your_bcrypt_hash

Generate password hash (optional helper)

node

const bcrypt = require("bcrypt");
bcrypt.hash("adminPass123",10).then(console.log)

Paste the generated hash into .env.

Start backend server

node server.js

Server will run on

http://localhost:5000

⸻

Frontend Setup

Open a new terminal

cd frontend

Install dependencies

npm install

Create .env file

REACT_APP_BACKEND_API_URL=http://localhost:5000

Start the frontend

npm start

Frontend will run on

http://localhost:3000

⸻

API Endpoint

Login

POST /login

Request body

{
"username": "admin",
"password": "adminPass123"
}

Success Response

200 OK

{
"message": "Login successful"
}

Error Response

401 Unauthorized

{
"message": "Invalid credentials"
}

⸻

Security Enhancements Implemented

Password Hashing

Passwords are verified using bcrypt instead of storing plain text credentials.

Rate Limiting

Login endpoint is protected using express-rate-limit to reduce brute-force attacks.

Max 10 login attempts per 15 minutes per IP

Environment Variables

Sensitive data such as credentials and port configuration are stored in .env files.

Helmet

Adds HTTP security headers to improve protection.

⸻

Future Improvements
• JWT based authentication
• Database integration (MongoDB / PostgreSQL)
• Signup functionality
• Session management
• Refresh tokens
• Deployment with Docker

⸻

Deployment

The project can be deployed using:
• Frontend → Netlify / Vercel
• Backend → Render / Railway / AWS

⸻

Screen Recording

Include a short demo video showing: 1. Project overview 2. Login functionality 3. Backend API explanation 4. Security features implemented

⸻

Author

Madhu
Full Stack Developer
