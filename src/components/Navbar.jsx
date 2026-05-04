import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { to: '/shop', label: 'Shop by Season' },
    { to: '/shop?category=bottom', label: 'Bottom Wear' },
    { to: '/shop?category=top', label: 'Top Wear' },
    { to: '/shop?category=accessories', label: 'Accessories' },
    { to: '/about', label: 'About' },
  ];

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-container container">
          {/* Left */}
          <div className="navbar-left">
            <button
              className="menu-btn"
              aria-label="Open menu"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={22} />
            </button>
            <div className="nav-links">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`nav-link${location.pathname === link.to ? ' active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Center — Logo */}
          <div className="navbar-center">
            <Link to="/" className="brand-logo">FUNCKY ZONE</Link>
          </div>

          {/* Right */}
          <div className="navbar-right">
            <nav className="nav-links right-links">
              <Link to="/login" className="nav-link">Login</Link>
            </nav>
            <Link to="/cart" className="icon-btn" aria-label="Cart">
              <ShoppingCart size={20} />
              <span className="cart-count-mobile">0</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu${isMobileMenuOpen ? ' open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mobile-menu-header">
          <span className="mobile-menu-logo">FUNCKY ZONE</span>
          <button
            className="close-menu-btn"
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        <div className="mobile-nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="mobile-nav-link"
            >
              {link.label}
            </Link>
          ))}
          <Link to="/login" className="mobile-nav-link">Login</Link>
        </div>
        <div className="mobile-menu-footer">© {new Date().getFullYear()} Funcky Zone</div>
      </div>
    </>
  );
};

export default Navbar;
