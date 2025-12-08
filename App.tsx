import React, { useState } from 'react';
import { portfolioData } from './data';
import { Section } from './components/Section';
import { SkillBadge } from './components/SkillBadge';
import { ProjectCard } from './components/ProjectCard';
import { 
  Menu, 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Download, 
  Award, 
  ChevronDown
} from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { personalInfo, skills, experience, projects, education, certifications, interests } = portfolioData;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const NavLink: React.FC<{ href: string; children: React.ReactNode; mobile?: boolean }> = ({ href, children, mobile }) => (
    <a 
      href={href} 
      onClick={() => mobile && setIsMenuOpen(false)}
      className={`block text-lg font-medium transition-colors duration-200 ${
        mobile 
        ? "py-3 text-brand-dark border-b border-stone-200" 
        : "text-brand-offwhite hover:text-brand-light"
      }`}
    >
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-stone-50 selection:bg-brand-brown selection:text-white font-sans">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-brand-dark shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-brand-offwhite font-bold text-xl tracking-widest">C. TOSSOU</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <NavLink href="#about">À propos</NavLink>
                <NavLink href="#skills">Compétences</NavLink>
                <NavLink href="#projects">Projets</NavLink>
                <NavLink href="#experience">Expérience</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-brand-offwhite p-2 rounded-md hover:bg-brand-brown focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow-xl absolute w-full">
            <NavLink href="#about" mobile>À propos</NavLink>
            <NavLink href="#skills" mobile>Compétences</NavLink>
            <NavLink href="#projects" mobile>Projets</NavLink>
            <NavLink href="#experience" mobile>Expérience</NavLink>
            <NavLink href="#contact" mobile>Contact</NavLink>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="about" className="relative h-screen min-h-[600px] flex items-center justify-center bg-brand-dark text-white overflow-hidden">
        {/* Abstract shapes for visual interest */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-brown opacity-20 transform skew-x-12 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-black opacity-10 rounded-tr-full"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            {/* Avatar Circle inspired by CV */}
            <div className="mx-auto w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-brand-accent/50 overflow-hidden mb-8 shadow-2xl">
               <img 
                 src="https://picsum.photos/400/400?grayscale" 
                 alt={personalInfo.name} 
                 className="w-full h-full object-cover"
               />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-brand-light mb-8 font-light uppercase tracking-widest">
              {personalInfo.title}
            </p>
            <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed mb-10">
              {personalInfo.bio}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact" className="px-8 py-3 bg-brand-light text-brand-dark font-bold rounded hover:bg-white transition-colors duration-300">
                Me contacter
              </a>
              <a href="#" className="px-8 py-3 border-2 border-brand-light text-brand-light font-bold rounded hover:bg-brand-light hover:text-brand-dark transition-colors duration-300 flex items-center justify-center gap-2">
                <Download size={20} />
                Télécharger CV
              </a>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="text-brand-accent w-8 h-8" />
            </div>
        </div>
      </header>

      {/* Skills Section */}
      <Section id="skills" title="Compétences">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-brand-brown">
              <h3 className="text-xl font-bold mb-4 text-brand-dark flex items-center">
                <span className="w-2 h-2 bg-brand-brown rounded-full mr-2"></span>
                {category.name}
              </h3>
              <div className="flex flex-wrap">
                {category.skills.map((skill, sIdx) => (
                  <SkillBadge key={sIdx} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience Section - Dark background */}
      <Section id="experience" title="Expérience & Formation" isDark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-brand-light flex items-center gap-2">
              <span className="p-2 bg-brand-brown rounded">Expérience</span>
            </h3>
            <div className="space-y-8 border-l-2 border-brand-brown pl-8 ml-4">
              {experience.map((job, idx) => (
                <div key={idx} className="relative">
                  <span className="absolute -left-[41px] top-0 w-5 h-5 bg-brand-accent rounded-full border-4 border-brand-dark"></span>
                  <h4 className="text-xl font-bold text-white">{job.company}</h4>
                  <p className="text-brand-light font-semibold mb-2">{job.role}</p>
                  <p className="text-stone-400 mb-3 text-sm">{job.description}</p>
                  <ul className="list-disc list-inside text-stone-400 text-sm space-y-1">
                    {job.achievements.map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-brand-light flex items-center gap-2">
               <span className="p-2 bg-brand-brown rounded">Formation</span>
            </h3>
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-brand-brown/20 p-6 rounded-lg border border-brand-brown/30">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-white">{edu.institution}</h4>
                    <span className="text-brand-light text-sm bg-brand-dark px-2 py-1 rounded">{edu.year}</span>
                  </div>
                  <p className="text-stone-300 font-medium">{edu.degree}</p>
                  {edu.details && <p className="text-stone-500 text-sm mt-1">{edu.details}</p>}
                </div>
              ))}

              {/* Certification Specific Block */}
              {certifications.length > 0 && (
                 <div className="mt-8">
                    <h4 className="text-xl font-bold text-brand-light mb-4 flex items-center gap-2">
                      <Award className="text-brand-accent" /> Certifications
                    </h4>
                    {certifications.map((cert, idx) => (
                      <div key={idx} className="bg-gradient-to-r from-brand-brown/40 to-transparent p-6 rounded-lg border-l-4 border-yellow-600">
                        <div className="flex justify-between items-start mb-1">
                          <h5 className="text-lg font-bold text-white">{cert.degree}</h5>
                          <span className="text-xs text-brand-light">{cert.year}</span>
                        </div>
                        <p className="text-stone-300 text-sm mb-2">{cert.institution}</p>
                        <p className="text-stone-400 text-xs italic">{cert.details}</p>
                        <a 
                          href="https://coursera.org/share/352072e67a402b54ef20f8d79a03ca82" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block mt-3 text-xs text-brand-light border border-brand-light px-3 py-1 rounded hover:bg-brand-light hover:text-brand-dark transition-colors"
                        >
                          Voir le certificat
                        </a>
                      </div>
                    ))}
                 </div>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projets Académiques & Personnels">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </Section>

      {/* Interests Section - Small strip */}
      <div className="bg-brand-light/20 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-brand-brown mb-6 uppercase tracking-wider">Centres d'intérêt</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {interests.map((interest, idx) => (
              <span key={idx} className="px-6 py-2 bg-white rounded-full text-brand-dark shadow-sm font-medium">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <footer id="contact" className="bg-brand-dark text-stone-300 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Restons en contact</h2>
          <p className="mb-12 text-lg max-w-xl mx-auto">
            Je suis actuellement à la recherche d'un stage ou d'opportunités en génie logiciel. 
            N'hésitez pas à me contacter pour discuter de vos projets.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center group">
              <div className="w-12 h-12 bg-brand-brown rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-light group-hover:text-brand-dark transition-colors">
                <Phone size={24} />
              </div>
              <h3 className="font-bold text-white mb-1">Téléphone</h3>
              <p>{personalInfo.contact.phone}</p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-12 h-12 bg-brand-brown rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-light group-hover:text-brand-dark transition-colors">
                <Mail size={24} />
              </div>
              <h3 className="font-bold text-white mb-1">Email</h3>
              <a href={`mailto:${personalInfo.contact.email}`} className="hover:text-brand-light transition-colors">
                {personalInfo.contact.email}
              </a>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-12 h-12 bg-brand-brown rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-light group-hover:text-brand-dark transition-colors">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-white mb-1">Localisation</h3>
              <p>{personalInfo.contact.location}</p>
            </div>
          </div>

          <div className="flex justify-center gap-6 border-t border-brand-brown/50 pt-8">
            {personalInfo.contact.github && (
              <a href={personalInfo.contact.github} className="text-stone-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
            )}
            {personalInfo.contact.linkedin && (
              <a href={personalInfo.contact.linkedin} className="text-stone-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            )}
          </div>
          
          <div className="mt-8 text-sm text-stone-500">
            © {new Date().getFullYear()} {personalInfo.name}. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;