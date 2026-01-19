import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

// Components aur Pages ke Imports
import Layout from './components/Layout';
import Home from './pages/Home';
import CityServicePage from './pages/CityServicePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AreasWeServe from './pages/AreasWeServe';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Layout ke andar routes taake Header/Footer har jagah nazar aaein */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Dynamic City Route */}
          <Route path="roofing-:citySlug" element={<CityServicePage />} />
          
          <Route path="services" element={<ServicesPage />} />
          <Route path="areas-we-serve" element={<AreasWeServe />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
