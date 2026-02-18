import React from 'react'
import nodes from '../data/nodes'

export default function WelcomeSection() {
  return (
    <section id={nodes.sections.welcome.id} className="tm-welcome-section">
      <div className="container tm-position-relative">
        <div className="row tm-welcome-content">
          <h2 className="white-text tm-handwriting-font tm-welcome-header">{nodes.sections.welcome.title} {nodes.sections.welcome.subtitle}</h2>
          <p className="gray-text tm-welcome-description">{nodes.sections.welcome.description}</p>
        </div>
      </div>
    </section>
  )
}
