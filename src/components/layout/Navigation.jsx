import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png'; // Import the logo

const Navigation = ({ setContactModalOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Current Build', path: '/current-build' },
  ];

  const isActive = (path) => location.pathname === path;

  const handleContactClick = () => {
    console.log('Contact button clicked'); // For debugging
    if (setContactModalOpen) {
      setContactModalOpen(true);
    } else {
      console.error('setContactModalOpen is not defined');
    }
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo with image */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center">
              <img 
                src={logo} 
                alt="Bounce Genesis Corps Logo" 
                className="h-10 w-auto object-contain" // Changed to maintain aspect ratio
              />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-50 font-bold text-xl tracking-tight">Bounce Genesis</span>
              <span className="text-gray-400 text-xs">Corps</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-gray-50'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={handleContactClick}
              className="px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-50 text-sm font-medium rounded-lg transition-colors border border-gray-700"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-gray-300 hover:bg-gray-800"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-800 animate-slide-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    isActive(item.path)
                      ? 'bg-gray-800 text-gray-50'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={handleContactClick}
                className="px-4 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-50 text-sm font-medium rounded-lg transition-colors border border-gray-700"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;