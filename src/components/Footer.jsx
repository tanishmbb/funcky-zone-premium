import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container footer-content">
        <div className="footer-col brand-col">
          <h2 className="footer-logo">FUNCKY ZONE</h2>
          <p className="footer-tagline">UNIFORM OF THE UNAFRAID.</p>
          <div className="social-links">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Twitter">TW</a>
          </div>
        </div>
        
        <div className="footer-col">
          <h3>Shop</h3>
          <ul>
            <li><Link to="/shop">All Products</Link></li>
            <li><Link to="/shop?category=new">New Arrivals</Link></li>
            <li><Link to="/shop?category=tees">Graphic Tees</Link></li>
            <li><Link to="/shop?category=hoodies">Hoodies</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Support</h3>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Size Guide</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} FUNCKY ZONE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
