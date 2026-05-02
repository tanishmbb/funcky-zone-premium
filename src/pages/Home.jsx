import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home fade-in">
      {/* Hero Section */}
      <section className="hero-section container">
        <div className="hero-container">
          <div className="hero-bg-image placeholder-img"></div>
          <div className="hero-content-new">
            <h1 className="hero-title-new">Uniform of<br/>the Unafraid.</h1>
            <p className="hero-subtitle-new">FUNCKY ZONE</p>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="categories section container">
        <h2 className="section-title text-center mb-8">SHOP BY CATEGORY</h2>
        <div className="category-grid">
          <Link to="/shop?category=hoodies" className="category-card">
            <div className="category-image placeholder-img">Hoodies Image</div>
            <div className="category-content">
              <h3>HOODIES</h3>
              <span>Shop Now</span>
            </div>
          </Link>
          <Link to="/shop?category=tees" className="category-card">
            <div className="category-image placeholder-img">Tees Image</div>
            <div className="category-content">
              <h3>TEES</h3>
              <span>Shop Now</span>
            </div>
          </Link>
          <Link to="/shop?category=bottoms" className="category-card">
            <div className="category-image placeholder-img">Bottoms Image</div>
            <div className="category-content">
              <h3>BOTTOMS</h3>
              <span>Shop Now</span>
            </div>
          </Link>
        </div>
      </section>

      {/* New Arrivals (Mock) */}
      <section className="new-arrivals section container">
        <div className="section-header">
          <h2 className="section-title">NEW ARRIVALS</h2>
          <Link to="/shop" className="view-all">VIEW ALL</Link>
        </div>
        <div className="product-scroll">
          {[1, 2, 3, 4].map((item) => (
            <Link to={`/product/${item}`} key={item} className="product-card">
              <div className="product-image-container">
                <div className="product-image placeholder-img">Product {item}</div>
              </div>
              <div className="product-info">
                <h3 className="product-title">FUNKY OVERSIZED TEE {item}</h3>
                <p className="product-price">₹ 1,499</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="newsletter section">
        <div className="container text-center">
          <h2 className="mb-4">JOIN THE FUNKY CULT</h2>
          <p className="mb-8">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required className="newsletter-input" />
            <button type="submit" className="btn-primary">SUBSCRIBE</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
