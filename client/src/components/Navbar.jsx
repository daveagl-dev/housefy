import { Logo, Chevron } from './Icons.jsx';

export default function Navbar() {
  return (
    <header className="navbar">
      <a className="logo" href="#top"><Logo /> HOUSEFY</a>
      <nav className="nav-links">
        <a href="#about">About Us</a>
        <a href="#properties">Properties</a>
        <a href="#services">Services</a>
        <a href="#more" className="more">More <Chevron width={14} height={14} /></a>
      </nav>
      <a href="#contact" className="btn btn-gold btn-sm">Contact Us</a>
    </header>
  );
}
