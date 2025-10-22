import React from 'react';

const Card = ({ src, alt, title, subtitle, index }) => {
  return (
    <div className="relative perspective-800 group cursor-pointer">
      <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-2xl h-64 md:h-80 flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
        <img 
          src={src} 
          alt={alt || `card-${index}`} 
          className="w-full h-full object-cover block transition-transform duration-300 group-hover:scale-110" 
        />
      </div>
      {/* rim glow effect */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/5 mix-blend-overlay" />
      {/* hover glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default Card;
