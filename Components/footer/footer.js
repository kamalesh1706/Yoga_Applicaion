import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet lorem at nisl malesuada, eget tempus metus porta.</p>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Classes</a></li>
              <li><a href="#">Instructors</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Us</h4>
            <p>123 Yoga Studio</p>
            <p>123 Main Street, City</p>
            <p>Country</p>
            <p>Email: info@example.com</p>
            <p>Phone: +1 123-456-7890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Your Yoga Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;