import React, { useState } from 'react';

const POSTS = [
  {
    category: 'SEO',
    date: 'Jul 28, 2026',
    readTime: '6 min',
    title: 'Why your rankings recover slower than they drop',
    excerpt: 'A look at crawl budget, index bloat, and the technical fixes that actually move recovery timelines.',
    thumb: '',
  },
  {
    category: 'Paid Media',
    date: 'Jul 14, 2026',
    readTime: '5 min',
    title: 'Setting CAC targets before you set a budget',
    excerpt: 'Most accounts pick spend first and CAC second. Here is why that order costs you in month two.',
    thumb: 'alt',
  },
  {
    category: 'Social',
    date: 'Jun 30, 2026',
    readTime: '4 min',
    title: 'The content calendar format we use for every client',
    excerpt: 'A simple structure for planning platform-specific content without losing a consistent brand voice.',
    thumb: 'alt2',
  },
  {
    category: 'Branding',
    date: 'Jun 18, 2026',
    readTime: '7 min',
    title: 'Positioning statements that survive a rebrand',
    excerpt: 'How to write a positioning line specific enough to guide creative decisions two years from now.',
    thumb: '',
  },
  {
    category: 'Email',
    date: 'Jun 02, 2026',
    readTime: '5 min',
    title: 'The welcome sequence most brands are missing',
    excerpt: 'A five-email flow that outperforms a single welcome message across every account we track.',
    thumb: 'alt',
  },
  {
    category: 'Analytics',
    date: 'May 21, 2026',
    readTime: '6 min',
    title: 'Attribution models, explained without the jargon',
    excerpt: 'First-touch, last-touch, and data-driven attribution — and which one actually fits your sales cycle.',
    thumb: 'alt2',
  },
];

export default function Blog() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Blog</span>
          <h1>Notes from inside our client accounts.</h1>
          <p className="lede">
            No gated whitepapers. Just the tactics, frameworks, and mistakes
            we've watched move (or stall) real campaigns.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="blog-grid">
            {POSTS.map((post) => (
              <article className="blog-card" key={post.title}>
                <div className={`blog-thumb ${post.thumb}`}>
                  <span>{post.category}</span>
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span>{post.date}</span>
                    <span>{post.readTime} read</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="newsletter">
            <div>
              <span className="eyebrow">Stay Current</span>
              <h3>One email a month. No filler, just what worked.</h3>
            </div>

            {submitted ? (
              <div className="form-success" style={{ marginBottom: 0 }}>
                You're subscribed — look out for our next issue.
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address"
                />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
