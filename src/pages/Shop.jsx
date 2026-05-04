import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown, ArrowRight } from 'lucide-react';
import './Shop.css';

const mockProducts = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Funky Essential ${i % 2 === 0 ? 'Tee' : 'Hoodie'} Vol.${i + 1}`,
  price: i % 2 === 0 ? '1,499' : '2,999',
  category: i % 2 === 0 ? 'tees' : 'hoodies',
  isNew: i < 3,
  img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80',
}));

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const displayedProducts = categoryFilter
    ? mockProducts.filter((p) => p.category === categoryFilter)
    : mockProducts;

  return (
    <div className="shop-page fade-in">

      {/* Banner */}
      <div className="shop-banner">
        <div className="container shop-banner-inner">
          <h1 className="shop-title">The Collection</h1>
          <p className="shop-subtitle">Latest drops from Funcky Zone</p>
        </div>
      </div>

      <div className="container">
        {/* Toolbar */}
        <div className="shop-toolbar">
          <button
            className="filter-toggle-btn"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            aria-expanded={isFilterOpen}
          >
            <Filter size={15} />
            Filter
            <ChevronDown size={15} className={`chevron ${isFilterOpen ? 'open' : ''}`} />
          </button>
          <div className="product-count">{displayedProducts.length} Products</div>
        </div>

        <div className="shop-layout">
          {/* Sidebar */}
          <aside className={`shop-sidebar${isFilterOpen ? ' open' : ''}`}>
            <div className="filter-group">
              <h3 className="filter-group-title">Categories</h3>
              <ul>
                <li><Link to="/shop" className={!categoryFilter ? 'active' : ''}>All Products</Link></li>
                <li><Link to="/shop?category=tees" className={categoryFilter === 'tees' ? 'active' : ''}>Tees</Link></li>
                <li><Link to="/shop?category=hoodies" className={categoryFilter === 'hoodies' ? 'active' : ''}>Hoodies</Link></li>
                <li><Link to="/shop?category=bottoms" className={categoryFilter === 'bottoms' ? 'active' : ''}>Bottoms</Link></li>
                <li><Link to="/shop?category=accessories" className={categoryFilter === 'accessories' ? 'active' : ''}>Accessories</Link></li>
              </ul>
            </div>
            <div className="filter-group">
              <h3 className="filter-group-title">Sort By</h3>
              <ul>
                <li><a href="#" className="active">Featured</a></li>
                <li><a href="#">Price: Low → High</a></li>
                <li><a href="#">Price: High → Low</a></li>
                <li><a href="#">Newest First</a></li>
              </ul>
            </div>
          </aside>

          {/* Grid */}
          <div className="shop-grid">
            {displayedProducts.length > 0 ? (
              displayedProducts.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className="product-card">
                  <div className="product-image-container">
                    <div
                      className="product-image"
                      style={{
                        backgroundImage: `url('${product.img}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    {product.isNew && <span className="product-badge">New</span>}
                    <div className="product-quick-add">Quick Add</div>
                  </div>
                  <div className="product-info">
                    <h3 className="product-title">{product.name}</h3>
                    <p className="product-price">₹ {product.price}</p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="shop-empty">
                <h3>No products found</h3>
                <p>Try a different filter or browse all products.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
