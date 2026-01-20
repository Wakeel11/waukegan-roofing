import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CityTemplate from './pages/CityTemplate'; // Name check karein
import Roofing from './pages/Roofing'; 
import Gutters from './pages/Gutters'; 
import ContactPage from './pages/ContactPage';
import AreasWeServe from './pages/AreasWeServe';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="roofing-services" element={<Roofing />} />
          <Route path="gutter-services" element={<Gutters />} />
          <Route path="services" element={<Navigate to="/roofing-services" replace />} />
          <Route path="areas-we-serve" element={<AreasWeServe />} />
          <Route path="contact" element={<ContactPage />} />
          
          {/* CRITICAL FIX: :cityName exactly matches CityTemplate */}
          <Route path="roofing-:cityName" element={<CityTemplate />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
