import React from 'react'
import DesktopSite from './components/DesktopSite'
import MobileSite from './components/MobileSite'

export default function App() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const media = window.matchMedia('(max-width: 900px)')
    const update = () => setIsMobile(media.matches)
    update()
    if (media.addEventListener) {
      media.addEventListener('change', update)
    } else {
      media.addListener(update)
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', update)
      } else {
        media.removeListener(update)
      }
    }
  }, [])

  React.useEffect(() => {
    document.body.classList.toggle('mobile-site-body', isMobile)
  }, [isMobile])

  return isMobile ? <MobileSite /> : <DesktopSite />
}
