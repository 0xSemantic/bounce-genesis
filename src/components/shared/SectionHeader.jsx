import React from 'react';

const SectionHeader = ({ 
  title, 
  subtitle, 
  description,
  align = 'center',
  tag,
  className = ''
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-3xl ${alignmentClasses[align]} ${className}`}>
      {tag && (
        <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-200 rounded-full mb-4">
          {tag}
        </span>
      )}
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-xl text-gray-700 mb-6">
          {subtitle}
        </p>
      )}
      
      {description && (
        <p className="text-lg text-gray-600 leading-relaxed">
          {description}
        </p>
      )}
      
      {/* Decorative line */}
      <div className={`h-0.5 w-20 bg-gradient-to-r from-gray-300 to-gray-400 mt-8 ${
        align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
      }`} />
    </div>
  );
};

export default SectionHeader;