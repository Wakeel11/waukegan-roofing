import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CityServicePage from './pages/CityServicePage';
import RoofService from './pages/RoofService'; 
import Gutters from './pages/Gutters'; 
import ContactPage from './pages/ContactPage';
import AreasWeServe from './pages/AreasWeServe';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Static Service Pages */}
          <Route path="roofing-installation" element={<RoofService serviceType="installation" />} />
          <Route path="roofing-repair" element={<RoofService serviceType="repair" />} />
          <Route path="roofing-inspection" element={<RoofService serviceType="inspection" />} />
          <Route path="roofing-cleaning" element={<RoofService serviceType="cleaning" />} />
          <Route path="roofing-replacement" element={<RoofService serviceType="replacement" />} />
          
          <Route path="gutter-services" element={<Gutters />} />
          <Route path="areas-we-serve" element={<AreasWeServe />} />
          <Route path="contact" element={<ContactPage />} />
          
          {/* Dynamic City Pages - Matches /#/roofing-waukegan */}
          <Route path="roofing-:citySlug" element={<CityServicePage />} />
          
          {/* Catch-all redirect */}
          <Route path="services" element={<Navigate to="/roofing-repair" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
