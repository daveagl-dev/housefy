import { useState } from 'react';
import { Heart, ArrowUpRight, Bed, Bath, Area } from './Icons.jsx';
import { images } from '../data.js';

function Fav({ className = '' }) {
  const [on, setOn] = useState(false);
  return (
    <button className={`fav ${on ? 'on' : ''} ${className}`} onClick={() => setOn(!on)} aria-label="Favorite">
      <Heart fill={on ? 'currentColor' : 'none'} />
    </button>
  );
}

export default function Discover() {
  return (
    <section className="discover" id="properties">
      <div className="discover-head">
        <h2>Discover Your Perfect <span className="gold">Property Match</span></h2>
        <p>Discover Your Perfect Property Match with our expert team's dedicated support. We combine deep market knowledge, local expertise, and personalized service to help you find a home that fits your lifestyle, budget, and future. Whether you're buying, selling, or investing — we're here to make it simple, seamless, and stress-free.</p>
      </div>
      <div className="mosaic">
        <div className="tile featured" style={{ backgroundImage: `url(${images.featured})` }}>
          <Fav />
          <div className="featured-card">
            <div className="featured-top">
              <span className="price">$930,000</span>
              <button className="circle-btn" aria-label="View"><ArrowUpRight /></button>
            </div>
            <address>7811 Lovelace Street,<br />San Francisco, CA 94121</address>
            <div className="meta">
              <span><Bed /> 3 Beds</span>
              <span><Bath /> 2 Baths</span>
              <span><Area /> 2,423 Sq Ft</span>
            </div>
          </div>
        </div>
        <div className="tile t-kitchen" style={{ backgroundImage: `url(${images.kitchen})` }}><Fav /></div>
        <div className="tile t-garden" style={{ backgroundImage: `url(${images.garden})` }}><Fav /></div>
        <div className="tile t-dining" style={{ backgroundImage: `url(${images.dining})` }}><Fav /></div>
      </div>
    </section>
  );
}
