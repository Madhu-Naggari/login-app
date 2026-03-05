# Login App

A simple login application with **React frontend** and **Node.js + Express backend** using JWT authentication, password hashing, and protected routes.

---

## Features

- User login with username and password
- Password hashing with **bcrypt**
- JWT-based authentication for protected routes
- Rate limiting on login to prevent brute-force attacks
- CORS and security headers with **cors** and **helmet**
- Responsive frontend using React + Tailwind CSS

---

## Tech Stack

**Frontend:**
- React
- React Router
- Tailwind CSS
- js-cookie (for token storage)
- lucide-react (icons)

**Backend:**
- Node.js
- Express.js
- bcrypt
- jsonwebtoken (JWT)
- dotenv
- express-rate-limit
- cors
- helmet

---

## Environment Variables

Create a `.env` file for **backend**:

env
PORT=3000
DB_USER=admin
PASSWORD_HASH=$2b$10$xxxxxxxxxxxxxxxxxxxxxxx
SECRET_KEY=your_jwt_secret
FRONTEND_URL=http://localhost:3001

Create a .env file for frontend (React):

REACT_APP_BACKEND_API_URL=http://localhost:3000


⸻

Installation

Backend

# Go to backend folder
cd backend

# Install dependencies
npm install

# Start server
npm start

Backend will run on http://localhost:3000 by default.

Frontend

# Go to frontend folder
cd frontend

# Install dependencies
npm install

# Start React app
npm start

Frontend will run on http://localhost:3001 by default.

⸻

Backend API

POST /login

Authenticate user.

Request Body:

{
  "username": "admin",
  "password": "adminPass123"
}

Success Response:

{
  "success": true,
  "token": "<jwt-token>",
  "message": "Login success"
}

Failure Response:

{
  "success": false,
  "message": "Invalid credentials"
}


⸻

GET / (Protected)

Verify JWT token.

Headers:

Authorization: Bearer <jwt-token>

Success Response:

{
  "message": "Verified",
  "username": "admin"
}

Failure Response:

{
  "message": "Access denied. No token provided"
}


⸻

Frontend Routes
	•	/ — Login page (public, redirects to /welcome if logged in)
	•	/welcome — Protected page (requires JWT token)

Notes
	•	JWT token is stored in cookies for authentication
	•	Frontend verifies token before allowing access to protected routes
	•	Loader animation uses Tailwind’s animate-spin
	•	Tailwind is used for styling and responsive layouts

⸻

Deployment
	•	Backend: Can be deployed on Render, Railway, Fly.io, Railway alternatives, or any Node.js hosting
	•	Frontend: Can be deployed on Vercel, Netlify, or any static React host
	•	Ensure environment variables are set correctly in production

⸻
