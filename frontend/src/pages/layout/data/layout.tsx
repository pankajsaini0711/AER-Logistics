import React from 'react';
import { Outlet } from 'react-router-dom';
import './layout.scss';
import Navbar from '../../../components/nav-bar/nav-bar';
import Footer from '../../../components/footer/footer';

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;