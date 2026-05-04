import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Home.css';

const TICKER_TEXT = [
  'New Season Drop',
  'Free Shipping Over ₹2,999',
  'Premium Quality Streetwear',
  'Uniform Of The Unafraid',
  'New Season Drop',
  'Free Shipping Over ₹2,999',
  'Premium Quality Streetwear',
  'Uniform Of The Unafraid',
];

const categoryData = [
  { to: '/shop?category=hoodies', label: 'Hoodies', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80' },
  { to: '/shop?category=tees',    label: 'Tees',    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80' },
  { to: '/shop?category=bottoms', label: 'Bottoms', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80' },
];

const Home = () => {
  return (
    <div className="home fade-in">

      {/* Announcement */}
      <div className="announcement-bar">
        🚀 New drop every Friday — Follow @funckyzone for early access
      </div>

      {/* ── Hero ── */}
      <section className="hero-section">
        <div className="hero-wrapper">
          <div className="hero-bg-image" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <span className="hero-tag">SS '25 Collection</span>
            <h1 className="hero-title">Uniform of<br />the Unafraid.</h1>
            <div className="hero-actions">
              <Link to="/shop" className="hero-btn-primary">
                Shop Now <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="hero-btn-secondary">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ticker ── */}
      <div className="ticker-section">
        <div className="ticker-track">
          {TICKER_TEXT.map((text, i) => (
            <span key={i} className="ticker-item">
              {text} <span className="ticker-dot" />
            </span>
          ))}
        </div>
      </div>

      {/* ── Brand Strip ── */}
      <div className="brand-strip">
        {['100% Premium Cotton', 'Ships Pan-India', 'Easy Returns', 'Made to Last'].map((t) => (
          <span key={t} className="brand-strip-item">✦ {t}</span>
        ))}
      </div>

      {/* ── Categories ── */}
      <section className="categories section container">
        <div className="categories-header">
          <span className="section-label">Browse</span>
          <h2 className="section-title">Shop By Category</h2>
        </div>
        <div className="category-grid">
          {categoryData.map((cat) => (
            <Link to={cat.to} className="category-card" key={cat.to}>
              <div
                className="category-image"
                style={{
                  backgroundImage: `url('${cat.img}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="category-overlay">
                <h3>{cat.label}</h3>
                <span className="category-cta">
                  Shop Now <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── New Arrivals ── */}
      <section className="new-arrivals section container">
        <div className="section-header">
          <div>
            <span className="section-label">Just Dropped</span>
            <h2 className="section-title">New Arrivals</h2>
          </div>
          <Link to="/shop" className="view-all">View All <ArrowRight size={14} /></Link>
        </div>
        <div className="product-scroll">
          {[1, 2, 3, 4].map((item) => (
            <Link to={`/product/${item}`} key={item} className="product-card">
              <div className="product-image-container">
                <div
                  className="product-image"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                {item === 1 && <span className="product-badge">New</span>}
                <div className="product-quick-add">Quick Add</div>
              </div>
              <div className="product-info">
                <h3 className="product-title">Funky Oversized Tee {item}</h3>
                <p className="product-price">₹ 1,499</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-inner">
            <p className="newsletter-eyebrow">Stay in the loop</p>
            <h2 className="newsletter-title">Join the Funcky Cult</h2>
            <p className="newsletter-sub">
              Drop alerts, exclusive discounts, and early access — straight to your inbox.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="newsletter-input"
                aria-label="Email address"
              />
              <button type="submit" className="btn-newsletter">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
