import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">

        {/* Brand */}
        <div className="footer-col brand-col">
          <h2 className="footer-logo">FUNCKY ZONE</h2>
          <p className="footer-tagline">Uniform of the Unafraid.</p>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">IG</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link" aria-label="Twitter">TW</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-link" aria-label="YouTube">YT</a>
          </div>
        </div>

        {/* Shop */}
        <div className="footer-col">
          <h3 className="footer-col-title">Shop</h3>
          <ul>
            <li><Link to="/shop">All Products</Link></li>
            <li><Link to="/shop?category=new">New Arrivals</Link></li>
            <li><Link to="/shop?category=tees">Graphic Tees</Link></li>
            <li><Link to="/shop?category=hoodies">Hoodies</Link></li>
            <li><Link to="/shop?category=bottoms">Bottoms</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-col">
          <h3 className="footer-col-title">Support</h3>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping &amp; Returns</a></li>
            <li><a href="#">Size Guide</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h3 className="footer-col-title">Company</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="container footer-bottom">
        <p className="footer-bottom-text">
          © {new Date().getFullYear()} Funcky Zone. All rights reserved.
        </p>
        <div className="footer-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
