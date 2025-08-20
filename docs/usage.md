## Usage

### Prerequisites
- Node.js 18+
- npm 9+

### Install
```bash
npm install
```

### Develop
```bash
npm run dev
```
Starts Astro dev server.

### Build
```bash
npm run build
```
Outputs static site into `dist/`.

### Preview
```bash
npm run preview
```
Serves the built site locally.

### Project Conventions
- Import aliases are defined in `tsconfig.json`:
  - `@components/*` → `src/components/*`
  - `@styles/*` → `src/styles/*`
  - `@assets/*` → `src/assets/*`
  - `@data/*` → `src/data/*`
  - `@js/*` → `src/js/*`

### Creating a Page
Create a new `.astro` file in `src/pages/` and wrap content with `BaseLayout`:
```astro
---
import BaseLayout from "src/layouts/BaseLayout.astro";
---

<BaseLayout title="Page Title" description="SEO description" preloadImg={import("@assets/images/your-image.webp")}>
  <h1>My Page</h1>
  <p>Content...</p>
  <!-- Add components here -->
  <!-- <CTA /> -->
</BaseLayout>
```

### Adding to Navigation
Edit `src/data/navData.json` and append an entry:
```json
{
  "key": "New Page",
  "url": "/new-page/"
}
```

