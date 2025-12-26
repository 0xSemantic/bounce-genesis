import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  primaryButton, 
  secondaryButton,
  badge,
  gradient = 'from-gray-900 to-gray-800'
}) => {
  return (
    <section className={`relative overflow-hidden bg-gradient-to-br ${gradient}`}>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      
      <div className="relative container-custom py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {badge && (
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 mb-8">
              <Sparkles size={14} className="text-gray-300 mr-2" />
              <span className="text-sm text-gray-300 font-medium">{badge}</span>
            </div>
          )}
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-50 mb-6 tracking-tight">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
              {subtitle}
            </p>
          )}
          
          {description && (
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
          
          {(primaryButton || secondaryButton) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryButton && (
                <button
                  onClick={primaryButton.onClick}
                  className="px-8 py-4 bg-gray-50 hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition-all hover:scale-105 flex items-center justify-center min-w-[200px]"
                >
                  {primaryButton.text}
                  {primaryButton.icon && <ArrowRight className="ml-2" size={20} />}
                </button>
              )}
              
              {secondaryButton && (
                <button
                  onClick={secondaryButton.onClick}
                  className="px-8 py-4 border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-gray-200 font-semibold rounded-lg transition-colors min-w-[200px]"
                >
                  {secondaryButton.text}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  );
};

export default HeroSection;