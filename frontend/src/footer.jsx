import React from 'react';
import './footer.css';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h3 className="footer__title">CipherBox</h3>
          <p className="footer__description">Encrypted chat and document sharing with top-level security.</p>
        </div>
        
        <div className="footer__section">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>
        
        <div className="footer__section">
          <h4 className="footer__heading">Follow Us</h4>
          <div className="footer__socials">
            <a href="https://github.com/ShikharGupta0813" aria-label="github"><FaGithub /></a>
            <a href="https://instagram.com/_gupta_shikhar" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com/shikhar-gupta-389552251" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} CipherBox. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
