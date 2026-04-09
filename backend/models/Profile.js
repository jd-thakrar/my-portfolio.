import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  socialLinks: {
    github: String,
    leetcode: String,
    linkedin: String
  },
  skills: [
    {
      category: String,
      items: [String]
    }
  ],
  education: [
    {
      degree: String,
      institution: String,
      cgpa: String,
      year: String,
      rank: String
    }
  ],
  projects: [
    {
      title: String,
      stack: String,
      description: String,
      links: [String] // e.g. "www.cbthakrar.com", etc.
    }
  ],
  experience: [
    {
      role: String,
      company: String,
      duration: String,
      description: String
    }
  ],
  achievements: [String]
});

export default mongoose.model('Profile', ProfileSchema);
