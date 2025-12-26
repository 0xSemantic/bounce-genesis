import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const GradientCard = ({ 
  title, 
  description, 
  icon: Icon,
  gradient = 'from-gray-100 to-gray-200',
  border = true,
  hoverEffect = true,
  onClick,
  tag,
  stats,
  className = ''
}) => {
  return (
    <div 
      onClick={onClick}
      className={`relative bg-white rounded-2xl ${
        border ? 'border border-gray-200' : ''
      } ${hoverEffect ? 'hover:shadow-xl hover:-translate-y-1' : 'shadow-lg'} 
      transition-all duration-300 overflow-hidden ${className}`}
    >
      {/* Gradient accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`} />
      
      <div className="p-6 md:p-8">
        {tag && (
          <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full mb-4">
            {tag}
          </span>
        )}
        
        <div className="flex items-start justify-between mb-4">
          {Icon && (
            <div className="p-3 rounded-xl bg-gray-100 text-gray-700">
              <Icon size={24} />
            </div>
          )}
          
          {onClick && (
            <ArrowUpRight 
              size={20} 
              className="text-gray-400 group-hover:text-gray-600 transition-colors" 
            />
          )}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
        
        {stats && (
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GradientCard;