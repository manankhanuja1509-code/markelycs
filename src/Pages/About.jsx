import React from 'react';
import { Link } from 'react-router-dom';

const VALUES = [
  {
    title: 'Numbers before opinions',
    desc: 'Every recommendation is backed by data from your accounts, not industry averages.',
  },
  {
    title: 'One team, one calendar',
    desc: 'Strategy, media, content, and design sit in the same room and report against the same goals.',
  },
  {
    title: 'Plain-language reporting',
    desc: 'No vanity dashboards. You get the three numbers that actually explain the month.',
  },
  {
    title: 'Built to be handed off',
    desc: 'Every system we build is documented so it still works if you ever bring it in-house.',
  },
];

const TIMELINE = [
  { year: '2017', title: 'Markelycs founded', desc: 'Started as a two-person SEO consultancy working with local retailers.' },
  { year: '2019', title: 'Paid media desk opens', desc: 'Added search and social advertising after client demand for full-funnel work.' },
  { year: '2021', title: 'Studio expands', desc: 'Brand, web design, and content teams join under one roof.' },
  { year: '2024', title: '200th campaign', desc: 'Crossed 200 completed campaigns across 38 industries.' },
];

export default function About() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">About Markelycs</span>
          <h1>A marketing studio built for people who check the numbers.</h1>
          <p className="lede">
            We started Markelycs because most agencies sell activity —
            posts, ads, blog counts — instead of outcomes. We build every
            engagement around the metric that actually matters to your
            business, then work backward into the channels that move it.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <div>
            <span className="eyebrow">Why We Exist</span>
          </div>
          <div>
            <p style={{ fontSize: '1.05rem', color: 'var(--ink)' }}>
              Nine years in, we still run every engagement the same way:
              understand the business first, pick the smallest set of channels
              that can hit the target, and report in language a founder or a
              CFO can act on. We turn away work that doesn't fit that model,
              which is why our average client relationship runs past three
              years.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">What We Value</span>
              <h2>The four rules every account runs on.</h2>
            </div>
          </div>
          <div className="value-grid">
            {VALUES.map((v) => (
              <div className="value-card" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Timeline</span>
              <h2>Nine years, one focus.</h2>
            </div>
          </div>
          <div className="timeline">
            {TIMELINE.map((t) => (
              <div className="timeline-row" key={t.year}>
                <div className="timeline-year mono">{t.year}</div>
                <div>
                  <h4>{t.title}</h4>
                  <p>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="cta-banner">
            <div>
              <span className="eyebrow" style={{ color: '#FF6B4A' }}>Work With Us</span>
              <h2>See if Markelycs is a fit for where you're headed.</h2>
              <p>A short intro call — we'll tell you honestly if we're the right studio.</p>
            </div>
            <Link to="/contact" className="btn btn-coral">Get in Touch</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
