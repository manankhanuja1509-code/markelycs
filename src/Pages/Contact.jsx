import React, { useState } from 'react';

const BUDGETS = [
  'Select a range',
  'Under $2,000 / mo',
  '$2,000 – $5,000 / mo',
  '$5,000 – $15,000 / mo',
  '$15,000+ / mo',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', budget: BUDGETS[0], message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Contact</span>
          <h1>Tell us what growth looks like for you.</h1>
          <p className="lede">
            Share a few details about your business and current channels.
            A strategist will reply within one business day with next steps.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap contact-grid">
          <div>
            {submitted && (
              <div className="form-success">
                Thanks — your message is in. We'll reply within one business day.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jordan Lee"
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jordan@company.com"
                  />
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company name"
                  />
                </div>
                <div className="field">
                  <label htmlFor="budget">Monthly budget</label>
                  <select id="budget" name="budget" value={form.budget} onChange={handleChange}>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">What are you looking to achieve?</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your business, current channels, and goals."
                />
              </div>

              <button type="submit" className="btn btn-primary">Send Message</button>
              <p className="form-note">We reply within one business day. No spam, ever.</p>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-item">
              <span className="eyebrow">Email</span>
              <p><a href="mailto:hello@markelycs.com">hello@markelycs.com</a></p>
            </div>
            <div className="info-item">
              <span className="eyebrow">Phone</span>
              <p><a href="tel:+15551234567">+1 (555) 123-4567</a></p>
            </div>
            <div className="info-item">
              <span className="eyebrow">Studio</span>
              <p>412 Congress Ave, Suite 300<br />Austin, TX 78701</p>
            </div>
            <div className="info-item">
              <span className="eyebrow">Hours</span>
              <p>Monday – Friday, 9:00am – 6:00pm CT</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
