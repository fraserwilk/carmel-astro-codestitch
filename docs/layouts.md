## Layouts

### `src/layouts/BaseLayout.astro`

Props:
- `title: string` — Page title used for `<title>` and OG tags
- `description: string` — Meta description and OG description
- `preloadImg?: ImageMetadata | Promise` — Optional image to preload (not currently rendered as preload in head; retained hook)

Usage:
```astro
---
import BaseLayout from "src/layouts/BaseLayout.astro";
---

<BaseLayout
  title="About"
  description="About page"
  preloadImg={import("@assets/images/landing-m.webp")}
>
  <h1>About</h1>
  <p>...</p>
</BaseLayout>
```

Notes:
- Injects `Header` and `Footer` automatically and exposes a `<slot />` for page content.
- Uses `src/data/client.json` for domain, name and address meta.
- Includes sitewide scripts (`/assets/js/nav.js`).

