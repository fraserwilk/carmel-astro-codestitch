## Pages & Routes

Astro maps files in `src/pages/` to routes.

Current pages:
- `/` → `src/pages/index.astro`
- `/contact/` → `src/pages/contact.astro`
- `/emdr/` → `src/pages/emdr.astro`
- `/about/` → `src/pages/about.astro`
- `/tips/` → `src/pages/tips.astro`
- `/work-with-me/` → `src/pages/work-with-me.astro`

### Page Pattern
All pages wrap content in `BaseLayout` and provide SEO props.

Example (`index.astro`):
```astro
---
import BaseLayout from "src/layouts/BaseLayout.astro";
import Hero from "@components/Hero.astro";
import ServicesThreeCards from "@components/ServicesThreeCards.astro";
import SideBySideReverse1279 from "@components/SideBySideReverse1279.astro";
import CTA from "@components/CTA.astro";
---

<BaseLayout
  title=""
  description="An experienced psychologist providing EMDR as the main treatment modality. Additional therapies include DBT, ACT, CBT and psychotherapy."
  preloadImg={import("@assets/images/landing-m.webp")}
>
  <Hero />
  <SideBySideReverse1279 />
  <ServicesThreeCards />
  <CTA />
</BaseLayout>
```

