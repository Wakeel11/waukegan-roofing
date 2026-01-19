import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CityTemplate from './pages/CityTemplate';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AreasWeServe from './pages/AreasWeServe';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="areas-we-serve" element={<AreasWeServe />} />
          <Route path="city/:cityName" element={<CityTemplate />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<div className="p-10 text-center text-2xl">About Page Placeholder</div>} />
          <Route path="projects" element={<div className="p-10 text-center text-2xl">Projects Page Placeholder</div>} />
          <Route path="faq" element={<div className="p-10 text-center text-2xl">FAQ Page Placeholder</div>} />
          <Route path="write-for-us" element={<div className="p-10 text-center text-2xl">Write For Us Placeholder</div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;