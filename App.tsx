import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CityServicePage from './pages/CityServicePage';
import RoofingServicePage from './pages/RoofingServicePage'; 
import Gutters from './pages/Gutters'; 
import ContactPage from './pages/ContactPage';
import AreasWeServe from './pages/AreasWeServe';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Main Service Pages */}
          <Route path="roofing-installation" element={<RoofingServicePage serviceType="installation" />} />
          <Route path="roofing-repair" element={<RoofingServicePage serviceType="repair" />} />
          <Route path="roofing-inspection" element={<RoofingServicePage serviceType="inspection" />} />
          <Route path="roofing-cleaning" element={<RoofingServicePage serviceType="cleaning" />} />
          <Route path="roofing-replacement" element={<RoofingServicePage serviceType="replacement" />} />
          <Route path="gutter-services" element={<Gutters />} />
          
          <Route path="areas-we-serve" element={<AreasWeServe />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="services" element={<Navigate to="/roofing-repair" replace />} />
          
          {/* Dynamic City Pages - Ise hamesha niche rakhein */}
          <Route path="roofing-:citySlug" element={<CityServicePage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
