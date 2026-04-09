import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Profile from './models/Profile.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolioDB';

const seedData = {
  name: "JEET THAKRAR",
  email: "jd.thakrar05@gmail.com",
  phone: "(+91) 96244 49764",
  socialLinks: {
    github: "https://github.com/jd-thakrar",
    leetcode: "https://leetcode.com/Thakrar_Jeet",
    linkedin: "https://linkedin.com/in/jeet-thakrar"
  },
  skills: [
    { category: "Languages", items: ["C", "C++", "Python", "JavaScript"] },
    { category: "Web Dev", items: ["HTML", "CSS", "Tailwind CSS", "Next.js"] },
    { category: "MERN Stack", items: ["MongoDB", "Express.js", "React.js", "Node.js"] },
    { category: "AI/ML", items: ["Basics of NLP", "Regression", "Classification", "Deep Learning"] },
    { category: "Core CS", items: ["DSA", "OOP", "OS", "DBMS"] },
    { category: "Tools", items: ["Git", "GitHub", "SQL", "Supabase", "Firebase"] }
  ],
  education: [
    {
      degree: "B.Tech in Computer Engineering",
      institution: "Marwadi University, Rajkot",
      cgpa: "9.95",
      year: "2026"
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "A.V.P.T.I., Rajkot",
      cgpa: "9.48",
      year: "2025",
      rank: "DDCET Rank: 233"
    }
  ],
  projects: [
    {
      title: "Production Business Websites Platform",
      stack: "Next.js, Supabase",
      description: "Built and deployed business websites for a Chartered Accountant firm and an Oil Expeller Manufacturer, delivering responsive UI and structured content.",
      links: ["www.cbthakrar.com", "www.makwanaengineeringworks.com"]
    },
    {
      title: "Payroll & Task Management System",
      stack: "MERN Stack",
      description: "Built full-stack workforce platform supporting task assignment, payroll tracking and role-based workflows, improving operational transparency by digitizing manual employee management processes.",
      links: ["worknest-hrms.vercel.app"]
    },
    {
      title: "Automated Coding Profile Analytics Dashboard",
      stack: "Next.js, APIs, Supabase",
      description: "Developed centralized dashboard to automatically track student performance across coding platforms, eliminating manual data collection and significantly reducing faculty effort. Received Special Track Winner recognition in college coding competition. Also Pitched solution to college administration.",
      links: []
    },
    {
      title: "Document Collaboration Chat Application",
      stack: "Full Stack, Cloud Integration",
      description: "Built a role-based chat web app for Professionals with OneDrive integration, letting clients organize documents while Professionals access and discuss them. Clients see only their assigned Professionals/employee, removing manual file handling.",
      links: []
    }
  ],
  experience: [
    {
      role: "Associate Web Designer Intern",
      company: "Niotechone Software Solution Pvt Ltd",
      duration: "Jul 2024 – Aug 2024",
      description: "Worked on responsive web design projects using HTML, CSS, JavaScript, jQuery and collaborated on real client solutions."
    }
  ],
  achievements: [
    "Special Track Winner - The Rising Star / Emerging Talent Event \"Third Byte\" for building Automated Student Analytics Dashboard",
    "Active problem solver on LeetCode platform with consistent participation"
  ]
};

const seedDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to Database');
    
    await Profile.deleteMany({});
    console.log('Cleared existing profiles');
    
    await Profile.create(seedData);
    console.log('Database seeded successfully');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();
