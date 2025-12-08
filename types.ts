export interface Project {
  title: string;
  role: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  period?: string;
  description: string;
  achievements: string[];
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
  details?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  github?: string;
  linkedin?: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    bio: string;
    contact: ContactInfo;
  };
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Education[];
  interests: string[];
}