import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CYCLE_WORDS = ['SEO', 'Social', 'Paid Media', 'Content', 'Brand'];

const SERVICE_CARDS = [
  {
    title: 'Search & SEO',
    desc: 'Technical audits, content architecture, and link strategy built to hold rankings, not just win them.',
  },
  {
    title: 'Paid Media',
    desc: 'Search, social, and programmatic campaigns tuned weekly against real cost-per-acquisition targets.',
  },
  {
    title: 'Social Strategy',
    desc: 'Editorial calendars, community management, and creative built for how each platform actually behaves.',
  },
  {
    title: 'Content & Copy',
    desc: 'Long-form, landing pages, and lifecycle copy written to move a specific reader to a specific action.',
  },
  {
    title: 'Brand & Web',
    desc: 'Identity systems and websites designed to carry a campaign, not just describe one.',
  },
  {
    title: 'Analytics & CRO',
    desc: 'Dashboards, attribution, and testing programs that tell you what to do next, not just what happened.',
  },
];

export default function Home({ Ticker }) {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % CYCLE_WORDS.length);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <main>
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">Markelycs / Full-Service Marketing</span>
              <h1>
                We build <span className="cycle-word">{CYCLE_WORDS[wordIndex]}</span>
                <br />that compounds.
              </h1>
              <p className="hero-sub">
                One studio for the whole funnel — strategy, media, content, and
                design — run by a team that reports in numbers, not vibes.
              </p>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary">Start a Project</Link>
                <Link to="/services" className="btn btn-outline">See Our Services</Link>
              </div>
            </div>

            <div className="hero-panel">
              <span className="mono">Live Readout — Q3</span>
              <div className="hero-panel-figure">+186%</div>
              <p style={{ fontSize: '0.85rem' }}>Avg. qualified lead growth across active accounts</p>
              <div className="hero-panel-list">
                <div className="hero-panel-row">
                  <span>Avg. CAC reduction</span>
                  <strong>-34%</strong>
                </div>
                <div className="hero-panel-row">
                  <span>Organic traffic lift</span>
                  <strong>+2.1x</strong>
                </div>
                <div className="hero-panel-row">
                  <span>Campaigns live</span>
                  <strong>142</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Ticker />

      <section className="stats">
        <div className="wrap stats-grid">
          <div>
            <div className="stat-num">220+</div>
            <div className="stat-label">Campaigns launched</div>
          </div>
          <div>
            <div className="stat-num">38</div>
            <div className="stat-label">Industries served</div>
          </div>
          <div>
            <div className="stat-num">9</div>
            <div className="stat-label">Years in market</div>
          </div>
          <div>
            <div className="stat-num">92%</div>
            <div className="stat-label">Client retention rate</div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">What We Do</span>
              <h2>Every channel a brand needs, run under one strategy.</h2>
            </div>
            <p>No siloed vendors. One team plans the media, writes the copy, and builds the site your traffic lands on.</p>
          </div>

          <div className="card-grid">
            {SERVICE_CARDS.map((card, i) => (
              <div className="card" key={card.title}>
                <span className="card-index mono">{String(i + 1).padStart(2, '0')}</span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <Link to="/services" className="card-link">Learn more &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap split">
          <div>
            <span className="eyebrow">Our Approach</span>
            <blockquote>
              &ldquo;Attention is rented. We build the systems that turn it into
              something you own.&rdquo;
            </blockquote>
          </div>
          <div>
            <div className="process">
              <div className="step">
                <span className="step-num mono">01</span>
                <h4>Discover</h4>
                <p>Audit your funnel, market, and current channels before we recommend anything.</p>
              </div>
              <div className="step">
                <span className="step-num mono">02</span>
                <h4>Strategize</h4>
                <p>Build a channel plan with clear targets, budgets, and timelines.</p>
              </div>
              <div className="step">
                <span className="step-num mono">03</span>
                <h4>Execute</h4>
                <p>Launch creative, campaigns, and content on a shared editorial calendar.</p>
              </div>
              <div className="step">
                <span className="step-num mono">04</span>
                <h4>Optimize</h4>
                <p>Review performance weekly and reallocate spend toward what's working.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="cta-banner">
            <div>
              <span className="eyebrow" style={{ color: '#FF6B4A' }}>Ready When You Are</span>
              <h2>Tell us where growth has stalled. We'll tell you why.</h2>
              <p>A free 30-minute audit of your current channels — no obligation, straight answers.</p>
            </div>
            <Link to="/contact" className="btn btn-coral">Book a Free Audit</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
