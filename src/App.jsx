import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import './App.css';

const SERVICES_TICKER = [
  'SEO', 'PAID MEDIA', 'SOCIAL STRATEGY', 'CONTENT & COPY',
  'BRAND IDENTITY', 'EMAIL & LIFECYCLE', 'WEB DESIGN', 'ANALYTICS & CRO'
];

function Ticker({ small }) {
  const items = [...SERVICES_TICKER, ...SERVICES_TICKER];
  return (
    <div className={`ticker${small ? ' small' : ''}`}>
      <div className="ticker-track">
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">markel<span>y</span>cs</Link>

        <nav>
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={location.pathname === link.to ? 'active' : ''}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-cta">
          <Link to="/contact" className="btn btn-outline">Start a Campaign</Link>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {open && (
        <div className="wrap" style={{ paddingBottom: 20 }}>
          <ul className="nav-links" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 16 }}>
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to} onClick={() => setOpen(false)}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">markel<span>y</span>cs</div>
          <p>
            A full-service digital marketing studio that plans, builds, and
            optimizes the channels that grow your brand — from first click
            to loyal customer.
          </p>
        </div>

        <div className="footer-col">
          <h5>Studio</h5>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li><Link to="/services">SEO &amp; Content</Link></li>
            <li><Link to="/services">Paid Media</Link></li>
            <li><Link to="/services">Social Strategy</Link></li>
            <li><Link to="/services">Brand &amp; Web</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Contact</h5>
          <ul>
            <li><a href="mailto:hello@markelycs.com">hello@markelycs.com</a></li>
            <li><a href="tel:+15551234567">+1 (555) 123-4567</a></li>
            <li>Austin, TX</li>
          </ul>
        </div>
      </div>

      <Ticker small />

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Markelycs Studio</span>
        <span>Signal over noise</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home Ticker={Ticker} />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
