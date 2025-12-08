import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span className="inline-block bg-brand-light/30 text-brand-dark border border-brand-brown/20 rounded-full px-4 py-2 text-sm font-semibold mr-2 mb-2 hover:bg-brand-brown hover:text-white transition-colors duration-300 cursor-default">
      {skill}
    </span>
  );
};