import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CityTemplate from './pages/CityTemplate'; // CityServicePage ki jagah CityTemplate use kar rahe hain
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
          
          {/* Main Service Pages */}
          <Route path="roofing-services" element={<Roofing />} />
          <Route path="gutter-services" element={<Gutters />} />
          
          {/* Redirect old services link to Roofing */}
          <Route path="services" element={<Navigate to="/roofing-services" replace />} />
          
          <Route path="areas-we-serve" element={<AreasWeServe />} />
          <Route path="contact" element={<ContactPage />} />
          
          {/* DYNAMIC CITY ROUTE FIX: 
            Yahan humne variable ka naam ":cityName" rakha hai 
            taake ye CityTemplate.tsx ke "useParams" se match kare.
          */}
          <Route path="roofing-:cityName" element={<CityTemplate />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
