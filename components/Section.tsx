import React from 'react';

interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  isDark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = "", isDark = false }) => {
  return (
    <section id={id} className={`py-16 px-4 md:px-8 lg:px-16 ${isDark ? 'bg-brand-dark text-brand-offwhite' : 'bg-transparent text-brand-dark'} ${className}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl font-bold mb-12 uppercase tracking-wider border-b-4 inline-block pb-2 ${isDark ? 'border-brand-accent' : 'border-brand-brown'}`}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};