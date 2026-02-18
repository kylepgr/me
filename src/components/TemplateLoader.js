export function loadTemplateAssets() {
  if (window.__templatesLoaded) return
  window.__templatesLoaded = true

  // Load template CSS from templates folder
  const cssFiles = [
    '/templates/css/bootstrap.min.css',
    '/templates/css/font-awesome.min.css',
    '/templates/css/templatemo-style.css'
  ]
  cssFiles.forEach(href => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href
    document.head.appendChild(link)
  })

  // Load template JS (jQuery + templatemo script)
  const jsFiles = ['/templates/js/jquery-1.11.2.min.js', '/templates/js/templatemo-script.js']
  jsFiles.forEach(src => {
    const s = document.createElement('script')
    s.src = src
    s.async = false
    document.body.appendChild(s)
  })
}
