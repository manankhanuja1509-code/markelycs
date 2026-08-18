import React from 'react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    title: 'Search Engine Optimization',
    desc: 'Technical audits, keyword architecture, and content and link programs that build rankings which hold up over time.',
    tags: ['Technical SEO', 'Content Strategy', 'Link Building', 'Local SEO'],
  },
  {
    title: 'Paid Media & PPC',
    desc: 'Search, shopping, social, and programmatic campaigns managed against clear cost-per-acquisition and ROAS targets.',
    tags: ['Google Ads', 'Meta Ads', 'Programmatic', 'Retargeting'],
  },
  {
    title: 'Social Media Marketing',
    desc: 'Platform-specific strategy, content calendars, and community management built around how each audience actually engages.',
    tags: ['Content Calendars', 'Community Mgmt', 'Influencer', 'Paid Social'],
  },
  {
    title: 'Content Marketing & Copy',
    desc: 'Long-form articles, landing pages, and lifecycle email copy written to move a specific reader toward a specific action.',
    tags: ['Blog & SEO Content', 'Landing Pages', 'Email Copy', 'Case Studies'],
  },
  {
    title: 'Branding & Identity',
    desc: 'Naming, positioning, and visual identity systems that give every later campaign a consistent voice.',
    tags: ['Logo & Identity', 'Brand Guidelines', 'Messaging', 'Positioning'],
  },
  {
    title: 'Web Design & Development',
    desc: 'Fast, conversion-focused websites and landing pages built to be the destination your campaigns actually deserve.',
    tags: ['UX/UI Design', 'Development', 'CRO', 'Web Maintenance'],
  },
  {
    title: 'Email & Lifecycle Marketing',
    desc: 'Welcome flows, nurture sequences, and retention campaigns that turn a first purchase into a repeat customer.',
    tags: ['Automation', 'Segmentation', 'A/B Testing', 'Retention'],
  },
  {
    title: 'Analytics & CRO',
    desc: 'Attribution modeling, dashboards, and structured testing programs that tell you what to fix next, not just what happened.',
    tags: ['Dashboards', 'Attribution', 'A/B Testing', 'Funnel Analysis'],
  },
];

export default function Services() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Services</span>
          <h1>Every channel, run by people who talk to each other.</h1>
          <p className="lede">
            Pick one service or hand us the whole funnel. Either way, the
            same strategists stay on your account, so nothing gets built in
            isolation.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="service-list">
            {SERVICES.map((s, i) => (
              <div className="service-row" key={s.title}>
                <span className="service-num mono">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <div>
                  <p>{s.desc}</p>
                  <div className="service-tags">
                    {s.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">How We Work</span>
              <h2>Four steps, every engagement.</h2>
            </div>
          </div>
          <div className="process">
            <div className="step">
              <span className="step-num mono">01</span>
              <h4>Discover</h4>
              <p>Audit your current channels, funnel, and competitors before recommending anything.</p>
            </div>
            <div className="step">
              <span className="step-num mono">02</span>
              <h4>Strategize</h4>
              <p>Set targets and a channel mix scoped to your budget and timeline.</p>
            </div>
            <div className="step">
              <span className="step-num mono">03</span>
              <h4>Execute</h4>
              <p>Launch creative, media, and content on a shared editorial calendar.</p>
            </div>
            <div className="step">
              <span className="step-num mono">04</span>
              <h4>Optimize</h4>
              <p>Review weekly, cut what's underperforming, and reinvest in what's working.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="cta-banner">
            <div>
              <span className="eyebrow" style={{ color: '#FF6B4A' }}>Not Sure Where to Start</span>
              <h2>Tell us your goal — we'll recommend the channel mix.</h2>
              <p>A free 30-minute consultation, no obligation.</p>
            </div>
            <Link to="/contact" className="btn btn-coral">Book a Consultation</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
