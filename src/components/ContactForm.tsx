import React, { useState } from 'react';
import { COMPANY_INFO, ALL_SERVICES } from '../data/servicesData';

interface ContactFormProps {
  dark?: boolean;
}

export default function ContactForm({ dark = false }: ContactFormProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: 'precision-manufacturing', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 800);
  };

  const inp: React.CSSProperties = dark
    ? { background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.15)', color: '#FFFFFF' }
    : { background: '#FFFFFF', borderColor: '#DDE4EA', color: '#061A2E' };
    
  const lbl: React.CSSProperties = dark ? { color: '#E8EDF1' } : { color: '#061A2E' };

  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2.5rem',
      background: dark ? '#09233D' : '#E8EDF1',
      border: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #DDE4EA',
      borderRadius: 14, padding: '2.25rem',
    }} className="contact-form-grid">
      
      {/* Form */}
      <div>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, color: dark ? '#FFFFFF' : '#061A2E', marginBottom: '0.4rem' }}>
          Project / Quote Inquiry
        </h3>
        <p style={{ fontSize: '0.88rem', color: dark ? '#607080' : '#607080', marginBottom: '1.5rem' }}>
          Our engineering team will review your specifications and respond within 24 hours.
        </p>

        {submitted ? (
          <div style={{ padding: '2rem', textAlign: 'center', background: dark ? 'rgba(217,139,50,0.15)' : '#FBF4EC', border: '1px solid #D98B32', borderRadius: 10 }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#D98B32', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h4 style={{ color: dark ? '#FFFFFF' : '#061A2E', fontFamily: 'var(--font-heading)', fontSize: '1.15rem', marginBottom: '0.4rem' }}>Inquiry Received!</h4>
            <p style={{ fontSize: '0.88rem', color: dark ? '#E8EDF1' : '#607080', marginBottom: '0.5rem' }}>
              Thank you <strong style={{ color: dark ? '#FFFFFF' : '#061A2E' }}>{form.name || 'Valued Client'}</strong>. We'll be in touch within 24 hours.
            </p>
            <p style={{ fontFamily: 'monospace', fontSize: '0.82rem', color: '#D98B32' }}>
              Ref: #IRN-{Math.floor(100000 + Math.random() * 900000)}
            </p>
            <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: 'precision-manufacturing', subject: '', message: '' }); }}
              style={{ marginTop: '1.25rem', background: 'none', border: 'none', color: '#D98B32', fontFamily: 'var(--font-heading)', fontWeight: 700, cursor: 'pointer', fontSize: '0.88rem' }}>
              Submit Another Inquiry →
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label" style={lbl}>Full Name *</label>
                <input name="name" type="text" required className="form-input" style={inp} placeholder="Robert Vance" value={form.name} onChange={onChange} />
              </div>
              <div className="form-group">
                <label className="form-label" style={lbl}>Work Email *</label>
                <input name="email" type="email" required className="form-input" style={inp} placeholder="rvance@company.com" value={form.email} onChange={onChange} />
              </div>
              <div className="form-group">
                <label className="form-label" style={lbl}>Phone Number</label>
                <input name="phone" type="tel" className="form-input" style={inp} placeholder="+1 (555) 019-2834" value={form.phone} onChange={onChange} />
              </div>
              <div className="form-group">
                <label className="form-label" style={lbl}>Service Required *</label>
                <select name="service" required className="form-select" style={inp} value={form.service} onChange={onChange}>
                  {ALL_SERVICES.map(s => <option key={s.id} value={s.id} style={{ background: '#061A2E', color: '#FFFFFF' }}>{s.title}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" style={lbl}>Subject / Project Title</label>
              <input name="subject" type="text" className="form-input" style={inp} placeholder="e.g. Steel Skid Fabrication & CNC Machining" value={form.subject} onChange={onChange} />
            </div>
            <div className="form-group">
              <label className="form-label" style={lbl}>Requirements / Message *</label>
              <textarea name="message" required rows={4} className="form-textarea" style={inp} placeholder="Describe your parts, material specs, quantities, or delivery timeline..." value={form.message} onChange={onChange} />
            </div>
            <button type="submit" className="btn btn-primary w-full" disabled={loading} style={{ marginTop: '0.5rem', justifyContent: 'center' }}>
              {loading ? 'Sending…' : 'Submit Inquiry to Engineering →'}
            </button>
          </form>
        )}
      </div>

      {/* Info Panel */}
      <div style={{
        background: dark ? 'rgba(255,255,255,0.04)' : '#FFFFFF',
        border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #DDE4EA',
        borderRadius: 10, padding: '1.5rem',
      }}>
        <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.98rem', fontWeight: 800, color: dark ? '#FFFFFF' : '#061A2E', marginBottom: '0.75rem' }}>Direct Engineering Support</h4>
        <p style={{ fontSize: '0.84rem', color: dark ? '#607080' : '#607080', lineHeight: 1.5, marginBottom: '1.25rem' }}>
          For urgent requests or direct technical consultation, contact our operations desk.
        </p>

        {[
          { label: 'Telephone', values: [COMPANY_INFO.contact.phone, COMPANY_INFO.contact.phoneAlt] },
          { label: 'Email Desk', values: [COMPANY_INFO.contact.email, COMPANY_INFO.contact.emailQuotes] },
          { label: 'Headquarters', values: [COMPANY_INFO.contact.address] },
          { label: 'Plant Hours', values: [COMPANY_INFO.contact.hours] },
        ].map((item, i) => (
          <div key={i} style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: i < 3 ? `1px solid ${dark ? 'rgba(255,255,255,0.08)' : '#DDE4EA'}` : 'none' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.68rem', fontWeight: 800, color: '#D98B32', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>{item.label}</div>
            {item.values.map((v, j) => <div key={j} style={{ fontSize: '0.84rem', color: dark ? '#E8EDF1' : '#061A2E', lineHeight: 1.45, fontWeight: 600 }}>{v}</div>)}
          </div>
        ))}
      </div>

      <style>{`@media(max-width:768px){.contact-form-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
