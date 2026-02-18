import React, { useState } from 'react'

export default function ImageNode({ src, alt = '', className = '', style = {} }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={className + ' reactive-image'}
        style={{ cursor: 'pointer', transition: 'transform 160ms ease', ...style }}
        onClick={() => setOpen(true)}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      />

      {open && (
        <div
          className="image-node-modal"
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
        >
          <img src={src} alt={alt} style={{ maxWidth: '95%', maxHeight: '90%', boxShadow: '0 8px 24px rgba(0,0,0,0.5)' }} />
        </div>
      )}
    </>
  )
}
