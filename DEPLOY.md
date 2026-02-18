# Deploying Pulse Coffee

This project builds to static files using Vite. The production output is in the `dist` folder after running `npm run build`.

## Static hosting (simplest)
1. Run `npm install` and `npm run build`.
2. Upload the **contents** of `dist/` to the host's public web root (often `public_html`).
3. If the host is Apache, the SPA rewrite rules are included via `public/.htaccess` and will be copied into `dist/` automatically on build.

## If the host needs a server
You can run the included `server.js` from the project root to serve `dist`:

```
node server.js
```

## SPA routing
If the host requires a rewrite rule, route all requests to `index.html` so client-side routing works.
