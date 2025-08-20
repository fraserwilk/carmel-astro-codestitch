## Components

### Common Import
```astro
---
import ComponentName from "@components/ComponentName.astro";
---
```

Only components that accept props expose a public API surface. Most components in this project render static content/stitches and do not accept props. Documented props are below.

### `Content.astro`
Location: `src/components/Content.astro`

Props:
- `title?: string` — Defaults to `"Carmel Pound Psychology"`
- `content: string` — HTML string rendered via `set:html`
- `content2?: string` — Not currently used in the template

Usage:
```astro
---
import Content from "@components/Content.astro";
---

<Content
  title="EMDR Therapist - Southern Highlands NSW"
  content="<p>Intro content...</p>"
/>
```

Accessibility:
- `content` is injected via `set:html`; ensure the string is sanitized or sourced from trusted content.

### `Hero.astro`
Location: `src/components/Hero.astro`

Props: none

Usage:
```astro
<Hero />
```

### `CTA.astro`
Location: `src/components/CTA.astro`

Props: none

Usage:
```astro
<CTA />
```

### `Header.astro`
Location: `src/components/Header.astro`

Props: none (uses `src/data/navData.json` and `src/data/client.json`)

Usage:
```astro
<Header />
```

### `Footer.astro`
Location: `src/components/Footer.astro`

Props: none (uses `src/data/client.json`)

Usage:
```astro
<Footer />
```

### Other sections
The following are stitch-based, static components without props; use directly:
- `FeaturedPost.astro`
- `Gallery.astro`
- `ServiceSixCards.astro`
- `ServicesThreeCards.astro`
- `SideBySide.astro`
- `SideBySide2.astro`
- `SideBySideReverse.astro`
- `SideBySideReverse1279.astro`

Example:
```astro
<ServicesThreeCards />
<SideBySideReverse1279 />
```

