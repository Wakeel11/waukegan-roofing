import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CityServicePage from './pages/CityServicePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AreasWeServe from './pages/AreasWeServe';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="areas-we-serve" element={<AreasWeServe />} />
          <Route path="contact" element={<ContactPage />} />
          {/* Ye line city links ko specific banati hai */}
          <Route path="roofing-:citySlug" element={<CityServicePage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
