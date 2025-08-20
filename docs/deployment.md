## Deployment

This site is a static Astro build. Common deployment methods:

### Netlify (recommended)
1. Push the repo to GitHub/GitLab/Bitbucket.
2. In Netlify, choose "Import from Git".
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Set environment: Node 18+.
5. Deploy.

Redirects: configure `public/_redirects` if needed.

### Vercel
1. Import the repo in Vercel.
2. Framework preset: Astro.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy.

### GitHub Pages
1. Build locally: `npm run build`.
2. Publish `dist/` via Actions or `gh-pages` branch.

### Local static hosting (Nginx/Apache/S3)
1. `npm run build`
2. Upload `dist/` to your static host (S3 + CloudFront, Nginx root, etc.).

### Environment & SEO
- Ensure `src/data/client.json` is populated (domain/name) for canonical and OG tags.
- Update `public/robots.txt` and `public/sitemap.xml` post-deploy.

