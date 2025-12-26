import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CurrentBuildPage from './pages/CurrentBuildPage';
import GrantsPage from './pages/GrantsPage';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import CookiePolicy from './pages/legal/CookiePolicy';

function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Layout 
          contactModalOpen={contactModalOpen} 
          setContactModalOpen={setContactModalOpen}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/current-build" element={<CurrentBuildPage />} />
            <Route path="/grants" element={<GrantsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;