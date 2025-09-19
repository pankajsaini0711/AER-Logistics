import React, { useState } from 'react';
import logo from './data/images/aer-nav-logo.png';
import './nav-bar.scss';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false); // optional, closes dropdown too
  };

  const toggleServicesDropdown = (e: React.MouseEvent) => {
    e.preventDefault(); // stops the page from jumping to #services
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
              <li><a href="#service1" onClick={closeMobileMenu}>Service 1</a></li>
              <li><a href="#service2" onClick={closeMobileMenu}>Service 2</a></li>
              <li><a href="#service3" onClick={closeMobileMenu}>Service 3</a></li>
              <li><a href="#service4" onClick={closeMobileMenu}>Service 4</a></li>
              <li><a href="#service5" onClick={closeMobileMenu}>Service 5</a></li>
            </ul>
          )}
        </li>
        <li><a href="#tech-ecosystem" onClick={closeMobileMenu}>YOUR INDUSTRY</a></li>
        <li><a href="#about" onClick={closeMobileMenu}>ABOUT US</a></li>
        <li><a href="#resources" onClick={closeMobileMenu}>LOCATION</a></li>
        <li><a href="#career" onClick={closeMobileMenu}>CAREER</a></li>
        <li><button className="contact-btn" onClick={closeMobileMenu}>Contact Us !</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;

