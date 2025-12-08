import React from 'react';
import { Project } from '../types';
import { Code, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-brown hover:shadow-xl transition-shadow duration-300 group">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-brown transition-colors">
          {project.title}
        </h3>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-brand-brown">
            <ExternalLink size={20} />
          </a>
        )}
      </div>
      <p className="text-sm text-brand-accent font-semibold mb-2">{project.role}</p>
      <p className="text-stone-600 mb-6 text-sm leading-relaxed min-h-[60px]">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className="flex items-center text-xs text-stone-500 bg-stone-100 px-2 py-1 rounded">
             <Code size={12} className="mr-1" /> {tech}
          </span>
        ))}
      </div>
    </div>
  );
};