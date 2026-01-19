import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import CityServicePage from './pages/CityServicePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AreasWeServe from './pages/AreasWeServe';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Isay humne mazeed asaan kar diya hai taake match ho jaye */}
        <Route path="/:citySlug" element={<CityServicePage />} />
        
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/areas-we-serve" element={<AreasWeServe />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="*" element={
          <div style={{ padding: '50px', textAlign: 'center' }}>
            <h1>404 - Page Not Found</h1>
            <p>The router is working, but the path is not matching.</p>
          </div>
        } />
      </Routes>
    </HashRouter>
  );
};

export default App;
