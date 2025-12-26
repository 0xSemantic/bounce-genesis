import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children, contactModalOpen, setContactModalOpen }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation setContactModalOpen={setContactModalOpen} />
      <main className="pt-20">
        {children}
      </main>
      <Footer setContactModalOpen={setContactModalOpen} />
    </div>
  );
};

export default Layout;