import http from 'http'
import { createReadStream, existsSync } from 'fs'
import { extname, join } from 'path'

const PORT = 3000
const distDir = join(process.cwd(), 'dist')

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon'
}

function serveFile(filePath, res) {
  const ext = extname(filePath).toLowerCase()
  const contentType = mimeTypes[ext] || 'application/octet-stream'
  res.writeHead(200, { 'Content-Type': contentType })
  createReadStream(filePath).pipe(res)
}

const server = http.createServer((req, res) => {
  const urlPath = (req.url || '/').split('?')[0]
  const cleanPath = urlPath === '/' ? '/index.html' : urlPath
  const filePath = join(distDir, cleanPath)

  if (existsSync(filePath)) {
    serveFile(filePath, res)
    return
  }

  // SPA fallback
  const indexPath = join(distDir, 'index.html')
  if (existsSync(indexPath)) {
    serveFile(indexPath, res)
    return
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
  res.end('Not found')
})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
