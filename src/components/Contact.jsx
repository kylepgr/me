import React from 'react'
import nodes from '../data/nodes'

export default function Contact() {
  return (
    <div className="container contact-container">
      <h2 className="tm-section-header">{nodes.contact.title}</h2>
      <div className="tm-contact-links">
        <a className="tm-contact-item" href="mailto:pulsecoffeebar@gmail.com">pulsecoffeebar@gmail.com</a>
        <span className="tm-contact-item">082 792 5805</span>
      </div>

    </div>
  )
}
