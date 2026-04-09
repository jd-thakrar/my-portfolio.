<div align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="80" />
  <img src="https://vitejs.dev/logo.svg" alt="Vite" width="70" />
  <h1>JEET THAKRAR | PREMIUM PORTFOLIO</h1>
  
  <p>
    <strong>A high-performance, futuristic 3D-inspired portfolio built with the MERN Stack & Vite.</strong>
  </p>

  <p>
    <a href="https://jd-thakrar.vercel.app/" target="_blank">View Live Demo</a>
    ·
    <a href="#-features">Explore Features</a>
    ·
    <a href="#-getting-started">Installation</a>
  </p>
  
  <p>
    <a href="https://jd-thakrar.vercel.app/"><img src="https://img.shields.io/website?url=https%3A%2F%2Fjd-thakrar.vercel.app%2F&style=for-the-badge&logo=vercel&logoColor=white&label=Deployment&color=black" alt="Vercel Deployment" /></a>
    <img src="https://img.shields.io/badge/React-18.x-20232a.svg?style=for-the-badge&logo=react&logoColor=61dafb" alt="React" />
    <img src="https://img.shields.io/badge/Node.js-18.x-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node" />
    <img src="https://img.shields.io/badge/MongoDB-Latest-47A248.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
    <img src="https://img.shields.io/badge/Status-Active-success.svg?style=for-the-badge" alt="Status" />
  </p>
</div>

<br />

## 📖 Overview

Welcome to the central repository for **Jeet Thakrar's** personal portfolio. Designed to be more than just a resume, this application serves as a fully dynamic, database-driven showcase of professional trajectory, technical arsenal, and selected works.

It implements a modern "Cyberpunk / Neon Glassmorphism" aesthetic built purely with vanilla CSS and Framer Motion to ensure butter-smooth micro-interactions.

---

## ✨ Features

- **⚡ Blazing Fast Architecture**: Frontend bundled via Vite, resulting in instant HMR and optimized production builds.
- **🎨 Premium UI/UX**: Custom CSS design system ensuring a unique, standout visual identity with dynamic scroll progress and hover effects.
- **💫 Fluid Animations**: Heavily relies on `framer-motion` for entrance animations, staggered renders, and viewport triggers.
- **📊 Dynamic Data Flow**: Experience, Projects, and Skills are fully decoupled from the UI and served via an Express/MongoDB backend API.
- **📱 Responsive by Design**: Flawlessly adapts to multi-monitor desktops, laptops, tablets, and mobile devices.

---

## 🛠️ Tech Stack

### Frontend Client
- **Core:** React 18
- **Build Tool:** Vite
- **Styling:** Vanilla CSS (CSS Variables, Grid, Flexbox)
- **Animations:** Framer Motion
- **Hosting:** Vercel

### Backend API
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose)
- **Utilities:** CORS, Dotenv

---

## 📂 Project Structure

```text
📦 portfolio
├── 📁 backend               # Node.js + Express Server
│   ├── 📁 models            # Mongoose Data Schemas
│   ├── 📄 server.js         # Entry Point & API Routes
│   ├── 📄 seed.js           # DB Seeding Script
│   └── 📄 package.json      # Backend Dependencies
├── 📁 public                # Static Assets (Favicon, etc.)
├── 📁 src                   # React Source Code
│   ├── 📁 assets            # Images & Icons
│   ├── 📁 components        # Reusable UI Blocks (Home, Contact, Skills)
│   ├── 📄 App.jsx           # Main Application Layout & Routing
│   ├── 📄 index.css         # Global Styles & Design System Tokens
│   └── 📄 main.jsx          # React DOM Renderer
├── 📄 .gitignore            
├── 📄 package.json          # Frontend Dependencies
├── 📄 vercel.json           # Vercel Deployment Configuration
└── 📄 vite.config.js        # Vite Config
```

---

## 🚀 Getting Started

To run this project locally, follow the steps below.

### 1. Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **MongoDB** (Local instance or MongoDB Atlas URI)
- Git

### 2. Installation

Clone the repository to your local machine:
```bash
git clone https://github.com/jd-thakrar/my-portfolio.git
cd my-portfolio
```

### 3. Backend Setup
Navigate to the backend directory, install dependencies, and configure the environment:
```bash
cd backend
npm install
```

Create a `.env` file in the `/backend` folder:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Seed the database with initial portfolio data (optional but recommended):
```bash
npm run seed
```

Start the backend server:
```bash
npm run dev
```

### 4. Frontend Setup
Open a new terminal window, navigate back to the project root, and install the frontend dependencies:
```bash
# From project root
npm install
```

Start the Vite development server:
```bash
npm run dev
```

Your app will now be running on `http://localhost:5173` with the API served at `http://localhost:5000`.

---

## 🌐 Deployment Details

The frontend of this application is seamlessly deployed on **Vercel** configured via the `vercel.json` file to appropriately rewrite API routes to ensure secure full-stack functionality without CORS complications.

**Live URL:** [https://jd-thakrar.vercel.app/](https://jd-thakrar.vercel.app/)

---

## 🤝 Contact

Created by **Jeet Thakrar**

- 📧 Email: *Your Email Placeholder*
- 💼 LinkedIn: *Your LinkedIn Placeholder*
- 🐙 GitHub: [@jd-thakrar](https://github.com/jd-thakrar)

<hr/>
<div align="center">
  <sub>Built with passion and lots of coffee. Design inspired by the future.</sub>
</div>
