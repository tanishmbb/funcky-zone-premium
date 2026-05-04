import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Minus, Plus, ShoppingBag, ChevronRight } from 'lucide-react';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeThumb, setActiveThumb] = useState(0);

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="product-details-page container fade-in">

      {/* Breadcrumb */}
      <nav className="product-breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <ChevronRight size={13} />
        <Link to="/shop">Shop</Link>
        <ChevronRight size={13} />
        <span>Funky Essential Tee Vol.{id}</span>
      </nav>

      <div className="product-details-layout">

        {/* Gallery */}
        <div className="product-gallery">
          <div className="main-image">
            <div className="main-image-inner" />
          </div>
          <div className="thumbnail-grid">
            {[0, 1, 2, 3].map((thumb) => (
              <div
                key={thumb}
                className={`thumbnail${activeThumb === thumb ? ' active-thumb' : ''}`}
                onClick={() => setActiveThumb(thumb)}
              >
                <div className="thumbnail-inner" />
              </div>
            ))}
          </div>
        </div>

        {/* Info Panel */}
        <div className="product-info-panel">
          <div className="product-tag-row">
            <span className="product-tag new">New Arrival</span>
            <span className="product-tag">Tees</span>
          </div>

          <h1 className="product-title-lg">Funky Essential Tee Vol.{id}</h1>

          <div className="product-price-row">
            <span className="product-price-lg">₹ 1,499</span>
            <span className="product-price-original">₹ 1,999</span>
            <span className="product-price-badge">25% OFF</span>
          </div>

          <div className="divider-line" />

          <div className="product-description">
            <p>
              Premium heavyweight cotton tee with an oversized fit.
              Featuring our signature puff print logo on the back and
              minimal branding on the front. Built for everyday wear.
            </p>
            <ul>
              <li>100% Premium Cotton</li>
              <li>240 GSM Heavyweight</li>
              <li>Oversized Boxy Fit</li>
              <li>Pre-shrunk &amp; Colourfast</li>
            </ul>
          </div>

          <div className="divider-line" />

          {/* Size Selector */}
          <div className="size-selector">
            <div className="size-header">
              <span className="size-label">Size — {selectedSize}</span>
              <button className="size-guide-btn">Size Guide</button>
            </div>
            <div className="size-options">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`size-btn${selectedSize === size ? ' active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                  aria-pressed={selectedSize === size}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <div className="add-to-cart-section">
            <div className="quantity-selector" aria-label="Quantity">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} aria-label="Decrease">
                <Minus size={15} />
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)} aria-label="Increase">
                <Plus size={15} />
              </button>
            </div>
            <button className="add-to-cart-btn" aria-label="Add to cart">
              <ShoppingBag size={18} /> Add to Cart
            </button>
          </div>

          {/* Shipping */}
          <div className="shipping-info">
            <p>Free shipping on orders over ₹ 2,999</p>
            <p>Estimated delivery: 3–5 business days</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
