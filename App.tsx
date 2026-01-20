import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CityServicePage from './pages/CityServicePage';
import RoofService from './pages/RoofService'; // Ye line ab sahi file ko point kar rahi hai
import Gutters from './pages/Gutters'; 
import ContactPage from './pages/ContactPage';
import AreasWeServe from './pages/AreasWeServe';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Specific Service Pages using the new RoofService component */}
          <Route path="roofing-installation" element={<RoofService serviceType="installation" />} />
          <Route path="roofing-repair" element={<RoofService serviceType="repair" />} />
          <Route path="roofing-inspection" element={<RoofService serviceType="inspection" />} />
          <Route path="roofing-cleaning" element={<RoofService serviceType="cleaning" />} />
          <Route path="roofing-replacement" element={<RoofService serviceType="replacement" />} />
          
          <Route path="gutter-services" element={<Gutters />} />
          <Route path="areas-we-serve" element={<AreasWeServe />} />
          <Route path="contact" element={<ContactPage />} />
          
          {/* Redirect old services link */}
          <Route path="services" element={<Navigate to="/roofing-repair" replace />} />
          
          {/* Dynamic City Pages - MUST stay at the bottom */}
          <Route path="roofing-:citySlug" element={<CityServicePage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
