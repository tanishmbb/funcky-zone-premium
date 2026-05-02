import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Minus, Plus, ShoppingBag } from 'lucide-react';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="product-details-page fade-in container section">
      <div className="product-details-layout">
        
        {/* Images Side */}
        <div className="product-gallery">
          <div className="main-image placeholder-img">
            Main Image {id}
          </div>
          <div className="thumbnail-grid">
            {[1, 2, 3, 4].map(thumb => (
              <div key={thumb} className="thumbnail placeholder-img">
                Thumb
              </div>
            ))}
          </div>
        </div>

        {/* Info Side */}
        <div className="product-info-panel">
          <h1 className="product-title-lg">FUNKY ESSENTIAL TEE VOL.{id}</h1>
          <p className="product-price-lg">Rs. 1,499</p>

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
              <li>Pre-shrunk</li>
            </ul>
          </div>

          <div className="size-selector">
            <div className="size-header">
              <span>Size</span>
              <button className="size-guide-btn">Size Guide</button>
            </div>
            <div className="size-options">
              {sizes.map(size => (
                <button 
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="add-to-cart-section">
            <div className="quantity-selector">
              <button onClick={handleDecrease}><Minus size={16} /></button>
              <span>{quantity}</span>
              <button onClick={handleIncrease}><Plus size={16} /></button>
            </div>
            <button className="btn-primary add-to-cart-btn">
              <ShoppingBag size={20} /> ADD TO CART
            </button>
          </div>

          <div className="shipping-info">
            <p>Free shipping on orders over Rs. 2,999.</p>
            <p>Estimated delivery: 3-5 business days.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
