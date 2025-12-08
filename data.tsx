import { PortfolioData } from './types';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

// C'est ici que vous pouvez modifier toutes les informations de votre portfolio
export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Chance TOSSOU",
    title: "Étudiant en Ingénierie Logicielle",
    bio: "Étudiant passionné par la programmation et les nouvelles technologies. Mon objectif est d'acquérir de l'expérience en développement, gaming, consulting et cybersécurité. Je suis créatif, adaptable et doté d'excellentes compétences relationnelles.",
    contact: {
      phone: "+229 01 54 62 64 44",
      email: "lucktossou0@gmail.com",
      location: "Cotonou, Bénin",
      // Ajoutez vos liens réels ici
      github: "https://github.com/", 
      linkedin: "https://linkedin.com/" 
    }
  },
  skills: [
    {
      name: "Langages de programmation",
      skills: ["C", "C++", "Python", "Haskell", "Bash", "JavaScript", "TypeScript"]
    },
    {
      name: "Frameworks & Outils",
      skills: ["FastAPI", "React", "Docker", "CSFML & SFML", "Figma", "Git/GitHub", "Notion"]
    },
    {
      name: "Compétences Clés",
      skills: ["Développement d'API", "Gestion de base de données", "Cybersécurité", "Gestion de projet", "Algorithmique"]
    },
    {
      name: "Langues",
      skills: ["Français (Natif)", "Anglais (Intermédiaire)"]
    }
  ],
  experience: [
    {
      company: "Soft Innovation Technologies",
      role: "Assistant Développeur (Stage)",
      description: "Participation active au développement backend.",
      achievements: [
        "Implémentation d'une API d'authentification pour une application web de diffusion de spots.",
        "Utilisation de Python avec FastAPI.",
        "Gestion de base de données et conteneurisation avec Docker."
      ]
    },
    {
      company: "Epitech Bénin",
      role: "Membre Squad Com & Organisation",
      description: "Organisation d'événements au sein de l'école.",
      achievements: [
        "Organisation des Journées Portes Ouvertes (JPO).",
        "Participation à l'organisation de Hackathons.",
        "Organisation du Week-end d'Intégration (WEI)."
      ]
    }
  ],
  projects: [
    {
      title: "Raytracer",
      role: "Développeur Principal",
      description: "Implémentation d'un moteur de rendu par lancer de rayons (Raytracing) capable de générer des images réalistes.",
      technologies: ["C++", "Programmation Orientée Objet", "Mathématiques"]
    },
    {
      title: "Arcade",
      role: "Architecte Logiciel",
      description: "Création d'une plateforme de jeux vidéo rétro modulaire supportant plusieurs librairies graphiques dynamiquement.",
      technologies: ["C", "C++", "Bash", "Shared Libraries"]
    },
    {
      title: "Zappy",
      role: "Développeur IA",
      description: "Implémentation d'un système automatisé (IA) dans un jeu de survie en réseau.",
      technologies: ["Python", "Réseau", "Intelligence Artificielle"]
    },
    {
      title: "Secured",
      role: "Ingénieur Sécurité",
      description: "Implémentation d'un système de hachage et de cryptage de données sécurisé.",
      technologies: ["C", "Cryptographie", "Sécurité des données"]
    }
  ],
  education: [
    {
      institution: "Epitech Bénin",
      degree: "Bachelor en Technologies de l'Information (En cours)",
      year: "2023 - Présent",
      details: "2ème année"
    },
    {
      institution: "Collège Catholique Saint Jean Baptiste",
      degree: "Baccalauréat Série D",
      year: "2023"
    }
  ],
  certifications: [
    {
      institution: "Google / Coursera",
      degree: "Google Cybersecurity Professional Certificate",
      year: "2024",
      details: "Formation complète sur la sécurité des réseaux, Linux, SQL, et Python pour la sécurité."
    }
  ],
  interests: [
    "Musique",
    "Sport en salle",
    "Course à pied"
  ]
};