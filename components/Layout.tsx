import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-brand-slate bg-gray-50">
      <Header />
      <main className="flex-grow pt-[104px] md:pt-[120px]"> 
        {/* Padding top accounts for sticky header height (TopBar + NavBar) */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;