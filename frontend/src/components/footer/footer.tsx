
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaXTwitter } from "react-icons/fa6";

import logoImage from '../nav-bar/data/images/aer-nav-logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-social">
          <div className="footer-logo">
            <img src={logoImage} alt="logo" className='footer-logo'/>
          </div>
          <div className="footer-social">
        <a href="#" aria-label="Twitter"><FaXTwitter size={20}/></a>
        <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#" aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} /></a>
        <a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Domestic Ground</a></li>
              <li><a href="#">Ocean Freight</a></li>
              <li><a href="#">Air Freight</a></li>
              <li><a href="#">Warehouse Management</a></li>
              <li><a href="#">Cold Chain Logistics</a></li>
              <li><a href="#">Project Logistics</a></li>
              <li><a href="#">Transportation Logistics</a></li>
              {/* <li><a href="#">Cargo Insurance</a></li>
              <li><a href="#">Licensed US custom broker</a></li>
              <li><a href="#">Resource Library</a></li> */}
            </ul>
          </div>
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Case Studies</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>About Us</h3>
            <ul>
              <li><a href="#">About our Company?</a></li>
              <li><a href="#">Why AER?</a></li>
              <li><a href="#">Contact Us</a></li>
              {/* <li><a href="#">Color wheel</a></li> */}
              <li><a href="#">Locations</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Explore </h3>
            <ul>
              <li><a href="#">Industry we serve</a></li>
              <li><a href="#">Career</a></li>

            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;