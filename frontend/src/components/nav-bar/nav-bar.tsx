import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from './data/images/aer-nav-logo.png';
import './nav-bar.scss';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const toggleServicesDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isServicesDropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesDropdownOpen]);

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
        <li className="services-dropdown" ref={dropdownRef}>
          <a href="#services" onClick={toggleServicesDropdown}>SERVICES</a>
          {isServicesDropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/service/domestic-transportation" onClick={closeMobileMenu}>Domestic Transportation</Link></li>
              <li><Link to="/service/ocean-freight" onClick={closeMobileMenu}>Ocean Freight</Link></li>
              <li><Link to="/service/air-freight" onClick={closeMobileMenu}>Air Freight</Link></li>
              <li><Link to="/service/warehouse-management" onClick={closeMobileMenu}>Warehouse Management</Link></li>
              <li><Link to="/service/cold-chain-logistics" onClick={closeMobileMenu}>Cold Chain Logistics</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/industry/show-freight" onClick={closeMobileMenu}>YOUR INDUSTRY</Link></li>
        <li><Link to="/about" onClick={closeMobileMenu}>ABOUT US</Link></li>
        <li><Link to="/resources" onClick={closeMobileMenu}>LOCATION</Link></li>
        <li><Link to="/career" onClick={closeMobileMenu}>CAREER</Link></li>
        <li><Link to="/contact" onClick={closeMobileMenu}><button className="contact-btn">Contact Us !</button></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
