import { images } from '../data.js';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-copy">
        <h2>About <span className="gold">Us</span></h2>
        <p>We help you find the perfect partner in the world of real estate. With years of experience and a passion for people, we're dedicated to making your home buying, selling, and investing journey smooth, simple, and successful.</p>
        <p>Our team of local experts takes the time to understand your unique needs, offering personalized guidance and trusted advice. From modern homes to investment properties, we're here to turn your real estate goals into reality — with integrity, transparency, and a commitment to excellence.</p>
      </div>
      <div className="about-img" style={{ backgroundImage: `url(${images.about})` }} />
    </section>
  );
}
