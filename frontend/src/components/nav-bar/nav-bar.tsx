import React, { useState } from 'react';
import logo from './data/images/aer-nav-logo.png';
import './nav-bar.scss';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="navbar-logo">
        <img src={logo} alt="AER Logistics Logo" />
      </div>
      <div className="hamburger" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className="navbar-links">
        <li className="services-dropdown">
          <a href="#services" onClick={toggleServicesDropdown}>
            SERVICES
          </a>
          {isServicesDropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="#service1">Service 1</a></li>
              <li><a href="#service2">Service 2</a></li>
              <li><a href="#service3">Service 3</a></li>
              <li><a href="#service4">Service 4</a></li>
              <li><a href="#service5">Service 5</a></li>
            </ul>
          )}
        </li>
        <li><a href="#tech-ecosystem">YOUR INDUSTRY</a></li>
        <li><a href="#about">ABOUT US</a></li>
        <li><a href="#resources">LOCATION</a></li>
        <li><a href="#career">CAREER</a></li>
        <li><button className="contact-btn">Contact Us !</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
