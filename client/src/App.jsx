import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Discover from './components/Discover.jsx';
import About from './components/About.jsx';
import Showcase from './components/Showcase.jsx';

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <Discover />
      <About />
      <Showcase />
    </div>
  );
}
