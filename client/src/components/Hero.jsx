import { Arrow } from './Icons.jsx';
import { images } from '../data.js';

const stats = [['80+', 'Properties for Sale'], ['500+', 'Happy Clients'], ['2K+', 'Listings/Partners']];

export default function Hero() {
  return (
    <section className="hero" id="top" style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.35), rgba(0,0,0,0) 70%), url(${images.hero})` }}>
      <div className="hero-copy">
        <h1>Find Your Dream Home Today</h1>
        <p>We connect you with the perfect properties, tailored to your lifestyle and goals. Modern homes, prime locations, exceptional value — all in one place.</p>
        <div className="hero-actions">
          <a href="#properties" className="btn btn-gold">View Properties <Arrow /></a>
          <a href="#about" className="btn btn-outline">Learn More</a>
        </div>
      </div>
      <div className="who-card">
        <h3>Who We Are?</h3>
        <p>We offer a range of modern solutions buying, selling, and property management.</p>
        <div className="stats">
          {stats.map(([n, l]) => (
            <div key={l}><strong>{n}</strong><span>{l}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}
