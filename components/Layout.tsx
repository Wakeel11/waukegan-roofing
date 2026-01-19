import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      {/* 140px padding di hai taake header ke niche se content shuru ho */}
      <main style={{ flex: 1, paddingTop: '140px' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
