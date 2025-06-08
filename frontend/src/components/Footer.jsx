import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light border-top text-center">
      <div className="container">
        <span className="text-muted">© {new Date().getFullYear()} Finance Tracker. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
