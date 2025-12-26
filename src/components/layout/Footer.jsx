import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import logo from '../../assets/logo.png'; // Import the logo

const Footer = ({ setContactModalOpen }) => {
  const currentYear = new Date().getFullYear(); // This will auto-update every year

  const socialLinks = [
    { icon: Github, href: 'https://github.com/0xSemantic', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/0xSemantic', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/in/0xSemantic', label: 'LinkedIn' },
    { icon: Mail, onClick: () => setContactModalOpen(true), label: 'Email' },
  ];

  const footerLinks = [
    { title: 'Company', links: [
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Current Build', path: '/current-build' },
    ]},
    { title: 'Resources', links: [
      { name: 'Documentation', href: '#' },
      { name: 'Whitepaper', href: '#' },
      { name: 'Blog', href: '#' },
    ]},
    { title: 'Legal & Grants', links: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms of Service', path: '/terms-of-service' },
      { name: 'Cookie Policy', path: '/cookie-policy' },
    ]},
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center">
                <img 
                  src={logo} 
                  alt="Bounce Genesis Corps Logo" 
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-50 font-bold text-xl">Bounce Genesis</span>
                <span className="text-gray-400 text-xs">Corps</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm mb-6 max-w-md">
              Building the operating system for digital existence. Seven divisions, one organism, one future.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  onClick={social.onClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-gray-300 hover:bg-gray-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-gray-300 font-semibold text-sm uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.path ? (
                      <Link
                        to={link.path}
                        className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              © {currentYear} Bounce Genesis Corps. All rights reserved. {/* Auto-updating year */}
            </p>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setContactModalOpen(true)}
                className="text-sm text-amber-400 hover:text-amber-300 transition-colors font-medium"
              >
                Contact for Solutions
              </button>
              <span className="text-xs text-gray-600">Version 1.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;