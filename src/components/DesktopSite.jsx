import React from 'react'
import { motion } from 'framer-motion'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

const webServices = [
  {
    name: 'Basic — One-Page Site',
    notes: [
      'Single, clean landing page',
      'Desktop + mobile ready',
      'Business name, description, contact & social links',
      'Great for freelancers, cafes, small shops just getting online',
    ],
    price: 'R 700 / month'
  },
  {
    name: 'Portfolio — 3–5 Pages',
    notes: [
      'Multi-page site (Home, About, Services, Gallery, Contact)',
      'Mobile-optimised + fast loading',
      'Great for photographers, creatives & local businesses with more to show',
    ],
    price: 'R 1 300 / month'
  },
  {
    name: 'Pro — The Full Setup',
    notes: [
      'Everything in Portfolio, plus:',
      'Image optimisation, lazy loading, Google PageSpeed 90+',
      'Free SSL, automated backups, malware protection',
      'Google Maps, contact form & basic SEO',
    ],
    price: 'R 2 500 / month'
  }
]

const tutoringPlans = [
  {
    title: 'Grades 8–9 Foundations',
    text: 'Number sense, algebra basics, and study habits. Building confidence from the ground up.'
  },
  {
    title: 'Grades 10–11 Core Skills',
    text: 'Functions, geometry, trig, and exam practice. Real problem-solving strategies.'
  },
  {
    title: 'Grade 12 Exam Prep',
    text: 'Past papers, time management, and targeted revision. Weekly progress check-ins.'
  }
]

const highlights = [
  { time: 'Web Dev',   label: 'Modern, fast websites' },
  { time: 'Maths',    label: 'Grades 8–12 tutoring' },
  { time: 'Location', label: 'Kimberley' }
]

const scheduleEvents = [
  {
    title: 'In-person availability',
    daysOfWeek: [1, 2, 3, 4],
    startTime: '15:00',
    endTime: '18:00',
    display: 'background'
  },
  {
    title: 'Booked',
    daysOfWeek: [1, 3],
    startTime: '16:00',
    endTime: '18:00',
    color: '#c04545'
  },
  {
    title: 'Available',
    daysOfWeek: [6],
    startTime: '10:00',
    endTime: '13:00',
    color: '#2f7d4b'
  },
  {
    title: 'Available',
    daysOfWeek: [2, 4],
    startTime: '15:00',
    endTime: '18:00',
    color: '#2f7d4b'
  },
  {
    title: 'Unavailable',
    daysOfWeek: [0, 5],
    startTime: '10:00',
    endTime: '19:00',
    color: '#9fa5a0',
    display: 'background'
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
}

function SectionHeader({ kicker, title, description }) {
  return (
    <div className="section-header">
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      <p className="section-desc">{description}</p>
    </div>
  )
}

export default function DesktopSite() {
  return (
    <div className="site">
      <div className="ambient">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
        <span className="grain" />
      </div>

      <header className="nav">
        <div className="logo">
          <span className="logo-mark" />
          <div>
            <p className="logo-title">kyle groenewald.</p>
            <p className="logo-sub">BSc Data Science</p>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#web-dev">Web Dev</a>
          <a href="#maths">Maths Tutoring</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">Book a call</a>
      </header>

      <main>
        <section className="hero" id="hero">
          <motion.div
            className="hero-text"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="kicker">Independent · BSc Data Science</motion.p>
            <motion.h1 variants={fadeUp}>
              Clean websites and confident maths students.
            </motion.h1>
            <motion.p variants={fadeUp} className="hero-desc">
              I build fast, modern sites for small businesses and help Grade 8–12 learners master maths — step by step, with real progress.
            </motion.p>
            <motion.div variants={fadeUp} className="hero-actions">
              <a className="primary" href="#web-dev">Web services</a>
              <a className="ghost" href="#maths">Maths tutoring</a>
            </motion.div>
            <motion.div variants={fadeUp} className="hero-meta">
              <div>
                <p className="meta-title">Web builds</p>
                <p className="meta-value">Design + launch</p>
              </div>
              <div>
                <p className="meta-title">Tutoring</p>
                <p className="meta-value">Grades 8–12</p>
              </div>
              <div>
                <p className="meta-title">Location</p>
                <p className="meta-value">Kimberley</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="card-top">
              <p className="card-label">Current focus</p>
              <div className="meter">
                <span className="meter-fill" />
              </div>
            </div>
            <div className="card-body">
              {highlights.map((slot) => (
                <div className="daypart" key={slot.time}>
                  <p className="daypart-time">{slot.time}</p>
                  <p className="daypart-label">{slot.label}</p>
                </div>
              ))}
            </div>
            <div className="card-bottom">
              <p>Next up: new client onboarding and exam prep blocks.</p>
            </div>
          </motion.div>
        </section>

        <section className="story" id="about">
          <SectionHeader
            kicker="About me"
            title="A builder and a patient teacher"
            description="I hold a BSc in Data Science and I'm working towards a PGCE, specialising in Mathematics and Computer Applications Technology. I care about clean craft — whether that's a fast website or a student finally understanding algebra." />
          <div className="story-grid">
            <div className="story-card">
              <h3>Web dev</h3>
              <p>Getting you online with what you need.</p>
            </div>
            <div className="story-card">
              <h3>Tutoring</h3>
              <p>1-on-1 sessions to get students to understand mathematics.</p>
            </div>
            <div className="story-card">
              <h3>Style</h3>
              <p>Tailored to fit your needs — everyone is different.</p>
            </div>
          </div>
        </section>

        <section className="menu" id="web-dev">
          <SectionHeader
            kicker="Web development"
            title="Websites, hosted and maintained"
            description="All packages include domain, hosting, and the full site build. A once-off onboarding fee of R 1 000 applies." />
          <div className="menu-grid">
            {webServices.map((item) => (
              <motion.div
                key={item.name}
                className="menu-card"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45 }}
              >
                <div>
                  <h3>{item.name}</h3>
                  <ul style={{ margin: '0.5em 0 0 1.1em', padding: 0, fontSize: '0.95em' }}>
                    {item.notes.map((point, idx) => (
                      <li key={idx} style={{ marginBottom: '0.3em' }}>{point}</li>
                    ))}
                  </ul>
                </div>
                <span>{item.price}</span>
              </motion.div>
            ))}
          </div>
          <div className="ritual-strip">
            <p>What's included: domain, hosting, and the site build — all in one monthly payment.</p>
          </div>
        </section>

        <section className="rituals" id="maths">
          <SectionHeader
            kicker="Maths tutoring"
            title="Grades 8–12 support"
            description="R 200 per hour on weekdays · R 300 per hour on weekends. Sessions need to be booked at least 24 hours in advance." />
          <div className="ritual-grid">
            {tutoringPlans.map((item) => (
              <div className="ritual-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="ritual-media-card" style={{ marginTop: '2.5em', padding: '2em 0' }}>
            <div className="visit-card schedule-card">
              <h3>Weekly schedule</h3>
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                headerToolbar={{ left: '', center: 'title', right: 'today prev,next' }}
                height="auto"
                allDaySlot={false}
                slotLabelFormat={{ hour: '2-digit', minute: '2-digit', hour12: false }}
                eventTimeFormat={{ hour: '2-digit', minute: '2-digit', hour12: false }}
                slotMinTime="10:00:00"
                slotMaxTime="19:00:00"
                nowIndicator
                expandRows
                events={scheduleEvents}
                dayHeaderFormat={{ weekday: 'short' }}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="footer-content">
          <div>
            <p className="footer-title">Let's talk</p>
            <p className="footer-desc">Send your goals, budget, and timeline. I'll reply with a plan and next steps.</p>
          </div>
          <div className="footer-contact-links">
            <a className="footer-contact-row" href="mailto:kylepgr@gmail.com">
              <span className="footer-contact-icon">✉</span>
              kylepgr@gmail.com
            </a>
            <a className="footer-contact-row" href="tel:0824161304">
              <span className="footer-contact-icon">☏</span>
              082 416 1304
            </a>
          </div>
        </div>
        <p className="footer-note">Copyright 2026 — Kyle Groenewald.</p>
      </footer>
    </div>
  )
}
