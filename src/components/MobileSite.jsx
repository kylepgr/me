import React, { useState } from 'react'
import { motion } from 'framer-motion'

// ─── Data ─────────────────────────────────────────────────────────────────────

const webPackages = [
  {
    name: 'Basic — One-Page Site',
    price: 'R 700 / month',
    tag: null,
    notes: [
      'Single, clean landing page',
      'Desktop + mobile ready',
      'Business name, description, contact & social links',
      'Great for freelancers, cafes, small shops',
    ],
  },
  {
    name: 'Portfolio — 3–5 Pages',
    price: 'R 1 300 / month',
    tag: 'Popular',
    notes: [
      'Home, About, Services, Gallery, Contact',
      'Mobile-optimised + fast loading',
      'Great for photographers, creatives & local businesses',
    ],
  },
  {
    name: 'Pro — The Full Setup',
    price: 'R 2 500 / month',
    tag: null,
    notes: [
      'Everything in Portfolio, plus:',
      'Image optimisation, lazy loading, PageSpeed 90+',
      'Free SSL, automated backups, malware protection',
      'Google Maps, contact form & basic SEO',
    ],
  },
]

const availability = [
  { day: 'Mon', time: '15:00 – 16:00', status: 'available' },
  { day: 'Mon', time: '16:00 – 18:00', status: 'booked' },
  { day: 'Tue', time: '15:00 – 18:00', status: 'available' },
  { day: 'Wed', time: '15:00 – 16:00', status: 'available' },
  { day: 'Wed', time: '16:00 – 18:00', status: 'booked' },
  { day: 'Thu', time: '15:00 – 18:00', status: 'available' },
  { day: 'Sat', time: '10:00 – 13:00', status: 'available' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.09, ease: 'easeOut' },
  }),
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function MobileSite() {
  const [openPackage, setOpenPackage] = useState(null)

  return (
    <div className="mobile-site-root">

      {/* ── Sticky Nav ── */}
      <nav className="mobile-nav">
        <div>
          <p className="mobile-nav-wordmark">who am i</p>
          <p className="mobile-nav-sub">Kyle Groenewald</p>
        </div>
        <a href="#m-contact" className="mobile-nav-cta">
          Contact
        </a>
      </nav>

      {/* ── Hero ── */}
      <section className="mobile-hero-section">
        <motion.div initial="hidden" animate="visible">
          <motion.p custom={0} variants={fadeUp} className="kicker" style={{ marginBottom: '0.5rem' }}>
            Independent · BSc Data Science
          </motion.p>
          <motion.h1 custom={1} variants={fadeUp} className="mobile-h1">
            Clean websites.<br />Confident maths students.
          </motion.h1>
          <motion.p custom={2} variants={fadeUp} className="mobile-body">
            I build fast, modern sites for small businesses and help Grade 8–12 learners master maths — step by step, with real progress.
          </motion.p>
          <motion.div custom={3} variants={fadeUp} className="mobile-actions" style={{ marginTop: '1.25rem' }}>
            <a className="primary" href="#m-webdev">Web services</a>
            <a className="ghost" href="#m-tutoring">Maths tutoring</a>
          </motion.div>
        </motion.div>

        {/* Stat chips */}
        <motion.div
          custom={4} initial="hidden" animate="visible" variants={fadeUp}
          className="mobile-stat-row"
        >
          {[
            { v: 'Design + launch', l: 'Web builds' },
            { v: 'Grades 8–12', l: 'Tutoring' },
            { v: 'Kimberley', l: 'Location' },
          ].map(s => (
            <div key={s.l} className="mobile-stat">
              <p className="mobile-stat-value">{s.v}</p>
              <p className="mobile-stat-label">{s.l}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── About ── */}
      <section className="mobile-section-block">
        <p className="mobile-section-kicker">About</p>
        <p className="mobile-body" style={{ marginTop: '0.5rem' }}>
          I hold a BSc in Data Science and I'm working towards a PGCE, specialising in Mathematics and Computer Applications Technology. I care about clean craft — whether that's a fast website or a student finally understanding algebra.
        </p>
        <div className="mobile-about-grid">
          {[
            { title: 'Web dev', desc: 'Getting you online with what you need.' },
            { title: 'Tutoring', desc: '1 on 1 sessions to get students to understand mathematics.' },
            { title: 'Style', desc: 'Tailored to fit your needs, everyone is different.' },
          ].map(c => (
            <div key={c.title} className="mobile-about-card">
              <p className="mobile-about-title">{c.title}</p>
              <p className="mobile-about-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Web Dev ── */}
      <section id="m-webdev" className="mobile-section-block">
        <p className="mobile-section-kicker">Web development</p>
        <h2 className="mobile-h2">Websites, hosted and maintained</h2>
        <p className="mobile-body">
          All packages include domain, hosting, and the full site build. <br></br> A once-off onboarding fee of R 1 000 applies.
        </p>

        <div className="mobile-package-list">
          {webPackages.map((pkg, i) => {
            const isOpen = openPackage === i
            return (
              <div
                key={pkg.name}
                className={`mobile-package-card ${isOpen ? 'mobile-package-card--open' : ''}`}
                onClick={() => setOpenPackage(isOpen ? null : i)}
              >
                <div className="mobile-package-header">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <p className="mobile-package-name">{pkg.name}</p>
                      {pkg.tag && <span className="mobile-package-tag">{pkg.tag}</span>}
                    </div>
                    <p className="mobile-package-price">{pkg.price}</p>
                  </div>
                  <span className="mobile-package-toggle">{isOpen ? '−' : '+'}</span>
                </div>
                {isOpen && (
                  <ul className="mobile-package-notes">
                    {pkg.notes.map((n, j) => <li key={j}>{n}</li>)}
                  </ul>
                )}
              </div>
            )
          })}
        </div>

        <div className="mobile-info-strip">
          <strong>What's included:</strong> domain, hosting, and the site build — all in one monthly payment.
        </div>

        <a href="#m-contact" className="mobile-cta-btn">
          Enquire about a website →
        </a>
      </section>

      {/* ── Tutoring ── */}
      <section id="m-tutoring" className="mobile-section-block">
        <p className="mobile-section-kicker">Maths tutoring</p>
        <h2 className="mobile-h2">Grades 8–12 support</h2>
        <p className="mobile-body">
          R 200 per hour, on weekdays · R 300 per hour, on weekends <br></br> Sessions need to be booked at least 24 hours in advance.
        </p>

        <div className="mobile-tutor-list">
          {[
            { grade: 'Gr 8–9', label: 'Foundations', desc: 'Number sense, algebra basics, and study habits. Building confidence from the ground up.' },
            { grade: 'Gr 10–11', label: 'Core Skills', desc: 'Functions, geometry, trig, and exam practice. Real problem-solving strategies.' },
            { grade: 'Gr 12', label: 'Exam Prep', desc: 'Past papers, time management, and targeted revision. Weekly progress check-ins.' },
          ].map(item => (
            <div key={item.grade} className="mobile-tutor-row">
              <div className="mobile-tutor-badge">{item.grade}</div>
              <div>
                <p className="mobile-tutor-label">{item.label}</p>
                <p className="mobile-tutor-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Availability */}
        <div className="mobile-avail-card">
          <p className="mobile-avail-title">Weekly availability</p>
          <div className="mobile-avail-list">
            {availability.map((slot, i) => (
              <div key={i} className="availability-row">
                <span className="availability-day">{slot.day}</span>
                <span className="availability-time">{slot.time}</span>
                <span className={`availability-status ${slot.status}`}>
                  {slot.status === 'available' ? 'Open' : 'Booked'}
                </span>
              </div>
            ))}
          </div>
          <p className="availability-note">Contact to confirm a slot.</p>
        </div>

        <a href="#m-contact" className="mobile-cta-btn mobile-cta-btn--ghost">
          Book a session →
        </a>
      </section>

      {/* ── Contact ── */}
      <section id="m-contact" className="mobile-section-block">
        <p className="mobile-section-kicker">Contact</p>
        <h2 className="mobile-h2">Let's talk</h2>
        <div className="mobile-contact-list">
          <a href="mailto:kylepgr@gmail.com" className="mobile-contact-row">
            <span className="mobile-contact-icon">✉</span>
            <span>kylepgr@gmail.com</span>
          </a>
          <a href="tel:0824161304" className="mobile-contact-row">
            <span className="mobile-contact-icon">☏</span>
            <span>082 416 1304</span>
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="mobile-footer-bar">
        © 2026 who am i · Kyle Groenewald
      </footer>
    </div>
  )
}
