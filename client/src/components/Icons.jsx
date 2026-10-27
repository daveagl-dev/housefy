const p = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };

export const Heart = (props) => (<svg {...p} {...props}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" /></svg>);
export const Arrow = (props) => (<svg {...p} {...props}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
export const ArrowUpRight = (props) => (<svg {...p} {...props}><path d="M7 17 17 7M8 7h9v9" /></svg>);
export const Bed = (props) => (<svg {...p} {...props}><path d="M3 18V6M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5" /></svg>);
export const Bath = (props) => (<svg {...p} {...props}><path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3zM6 12V6a2 2 0 0 1 3.5-1.3M6 19l-1 2M18 19l1 2" /></svg>);
export const Area = (props) => (<svg {...p} {...props}><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 15l6-6M10 9h5v5" /></svg>);
export const Search = (props) => (<svg {...p} {...props}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>);
export const Chevron = (props) => (<svg {...p} {...props}><path d="m6 9 6 6 6-6" /></svg>);
export const Logo = (props) => (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" {...props}><path d="M3 11 12 3l9 8M5 9.5V21h14V9.5M9 21v-6h6v6" /></svg>);
