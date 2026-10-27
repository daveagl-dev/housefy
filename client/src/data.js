const u = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: u('1600607687939-ce8a6c25118c', 1800),
  featured: u('1600596542815-ffad4c1539a9', 1000),
  kitchen: u('1600585154340-be6161a56a0c', 700),
  garden: u('1600210492486-724fe5c67fb0', 700),
  dining: u('1600566753190-17f0baa2a6c3', 1000),
  about: u('1560518883-ce09059eeffa', 1400),
};

export const properties = [
  { id: 1, city: 'Atlanta, GA', price: 1295000, beds: 3, baths: 2, sqft: 2850, type: 'Home', img: u('1613490493576-7fde63acd811', 700) },
  { id: 2, city: 'San Francisco, CA', price: 2850000, beds: 4, baths: 3, sqft: 3620, type: 'Home', img: u('1512917774080-9991f1c4c750', 700) },
  { id: 3, city: 'Boston, MA', price: 1750000, beds: 3, baths: 2, sqft: 2400, type: 'Sale', img: u('1600585154340-be6161a56a0c', 700) },
  { id: 4, city: 'Austin, TX', price: 1220000, beds: 3, baths: 2, sqft: 2100, type: 'Sale', img: u('1600210492486-724fe5c67fb0', 700) },
];
