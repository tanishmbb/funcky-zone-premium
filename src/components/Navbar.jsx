import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, Search, User, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="navbar-left">
          <button className="menu-btn" aria-label="Menu" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
          <div className="nav-links">
            <Link to="/shop" className="nav-link">SHOP BY SEASON</Link>
            <Link to="/shop?category=bottom" className="nav-link">BOTTOM WEAR</Link>
            <Link to="/shop?category=top" className="nav-link">TOP WEAR</Link>
            <Link to="/shop?category=accessories" className="nav-link">ACCESSORIES</Link>
          </div>
        </div>

        <div className="navbar-center">
          <Link to="/" className="brand-logo">
            FUNCKY ZONE
          </Link>
        </div>

        <div className="navbar-right">
          <div className="nav-links right-links">
            <Link to="/login" className="nav-link">LOGIN</Link>
            <Link to="/cart" className="nav-link cart-link">
              CART <span className="cart-count">0</span>
            </Link>
          </div>
          <button className="icon-btn cart-btn-mobile" aria-label="Cart">
            <ShoppingCart size={20} />
            <span className="cart-count-mobile">0</span>
          </button>
        </div>
      </div>
    </nav>
      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="close-menu-btn" onClick={() => setIsMobileMenuOpen(false)}>
          <X size={28} />
        </button>
        <div className="mobile-nav-links">
          <Link to="/shop" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>SHOP BY SEASON</Link>
          <Link to="/shop?category=bottom" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>BOTTOM WEAR</Link>
          <Link to="/shop?category=top" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>TOP WEAR</Link>
          <Link to="/shop?category=accessories" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>ACCESSORIES</Link>
          <Link to="/login" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>LOGIN</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
