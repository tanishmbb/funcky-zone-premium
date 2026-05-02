import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import './Shop.css';

// Mock data
const mockProducts = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `FUNKY ESSENTIAL ${i % 2 === 0 ? 'TEE' : 'HOODIE'} VOL.${i + 1}`,
  price: i % 2 === 0 ? '1,499' : '2,999',
  category: i % 2 === 0 ? 'tees' : 'hoodies',
}));

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const displayedProducts = categoryFilter 
    ? mockProducts.filter(p => p.category === categoryFilter)
    : mockProducts;

  return (
    <div className="shop-page fade-in">
      <div className="shop-header text-center section">
        <h1 className="shop-title">THE COLLECTION</h1>
        <p className="shop-subtitle">Latest drops from Funcky zone</p>
      </div>

      <div className="container shop-container">
        <div className="shop-toolbar">
          <button 
            className="filter-toggle-btn"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter size={18} /> FILTER <ChevronDown size={18} className={`chevron ${isFilterOpen ? 'open' : ''}`} />
          </button>
          <div className="product-count">{displayedProducts.length} Products</div>
        </div>

        <div className="shop-layout">
          {/* Sidebar / Filters */}
          <aside className={`shop-sidebar ${isFilterOpen ? 'open' : ''}`}>
            <div className="filter-group">
              <h3>Categories</h3>
              <ul>
                <li><Link to="/shop" className={!categoryFilter ? 'active' : ''}>All</Link></li>
                <li><Link to="/shop?category=tees" className={categoryFilter === 'tees' ? 'active' : ''}>Tees</Link></li>
                <li><Link to="/shop?category=hoodies" className={categoryFilter === 'hoodies' ? 'active' : ''}>Hoodies</Link></li>
                <li><Link to="/shop?category=bottoms" className={categoryFilter === 'bottoms' ? 'active' : ''}>Bottoms</Link></li>
              </ul>
            </div>
            <div className="filter-group">
              <h3>Sort By</h3>
              <ul>
                <li><a href="#" className="active">Featured</a></li>
                <li><a href="#">Price: Low to High</a></li>
                <li><a href="#">Price: High to Low</a></li>
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="shop-grid">
            {displayedProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="product-card">
                <div className="product-image-container">
                  <div className="product-image placeholder-img">Product {product.id}</div>
                </div>
                <div className="product-info">
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-price">₹ {product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
