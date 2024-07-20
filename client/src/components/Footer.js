import React from 'react';
import { Link } from 'react-router-dom';
import facebookIcon from './img/icons/facebook.png';
import instagramIcon from './img/icons/instagram.png';
import linkedinIcon from './img/icons/linkedin.png';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>RealEstate</h3>
          <p>Your trusted partner in finding the perfect property.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Real Estate Street</p>
          <p>Augmented City , Real World</p>
          <p>Phone: (+94) 2520196</p>
          <p>Email: info@realestate.com</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="Facebook" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 RealEstate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;