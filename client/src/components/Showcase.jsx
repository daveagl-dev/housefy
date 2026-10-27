import { useState } from 'react';
import { Heart, Bed, Bath, Area, Search } from './Icons.jsx';
import { properties } from '../data.js';

const filters = ['All', 'Home', 'Sale'];

export default function Showcase() {
  const [filter, setFilter] = useState('All');
  const [q, setQ] = useState('');
  const [favs, setFavs] = useState({});
  const [page, setPage] = useState(0);

  const list = properties.filter(
    (p) => (filter === 'All' || p.type === filter) && p.city.toLowerCase().includes(q.trim().toLowerCase())
  );

  return (
    <section className="showcase" id="services">
      <h2>Property Showcase</h2>
      <div className="filters">
        {filters.map((f) => (
          <button key={f} className={`pill ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>{f}</button>
        ))}
        <label className="search">
          <input placeholder="City or Property Name" value={q} onChange={(e) => setQ(e.target.value)} />
          <span className="search-btn"><Search width={14} height={14} /></span>
        </label>
      </div>
      <div className="cards">
        {list.map((p) => (
          <article className="card" key={p.id}>
            <div className="card-img" style={{ backgroundImage: `url(${p.img})` }}>
              <button className={`fav ${favs[p.id] ? 'on' : ''}`} onClick={() => setFavs({ ...favs, [p.id]: !favs[p.id] })} aria-label="Favorite">
                <Heart fill={favs[p.id] ? 'currentColor' : 'none'} />
              </button>
            </div>
            <div className="card-body">
              <h4>{p.city}</h4>
              <div className="card-price">${p.price.toLocaleString('en-US')}</div>
              <div className="meta">
                <span><Bed width={13} height={13} /> {p.beds}</span>
                <span><Bath width={13} height={13} /> {p.baths}</span>
                <span><Area width={13} height={13} /> {p.sqft.toLocaleString('en-US')} Sq Ft</span>
              </div>
            </div>
          </article>
        ))}
        {list.length === 0 && <p className="empty">No properties found.</p>}
      </div>
      <div className="dots">
        {[0, 1, 2, 3, 4].map((i) => (
          <button key={i} className={i === page ? 'active' : ''} onClick={() => setPage(i)} aria-label={`Page ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
