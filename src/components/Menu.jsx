import React from 'react'
import nodes from '../data/nodes'
import menuImage from '../assets/menu-whatsapp.jpeg'

export default function Menu() {
  return (
    <div id={nodes.sections.menu.id} className="container contact-container">
      <h2 className="tm-section-header gold-text tm-handwriting-font">{nodes.sections.menu.title}</h2>
      <div className="tm-menu-product-content">
        <img src={menuImage} alt="Menu" style={{ width: '100%', height: 'auto', borderRadius: 12 }} />
      </div>
    </div>
  )
}
