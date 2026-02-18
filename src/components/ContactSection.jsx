import React from 'react'
import Contact from './Contact'
import nodes from '../data/nodes'

export default function ContactSection() {
  return (
    <section id={nodes.sections.contact.id} className="tm-main-section">
      <div className="container contact-container">
        <Contact />
      </div>
    </section>
  )
}
