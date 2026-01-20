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
          
          {/* ZARURI FIX: Ise ":slug" kar diya hai taake ye "/roofing-waukegan" 
             ko poora utha lay aur crash na ho.
          */}
          <Route path=":slug" element={<CityServicePage />} />

          <Route path="services" element={<Navigate to="/roofing-repair" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
