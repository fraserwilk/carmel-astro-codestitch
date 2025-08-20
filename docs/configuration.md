## Configuration & Aliases

### TypeScript Paths (`tsconfig.json`)
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@data/*": ["src/data/*"],
      "@styles/*": ["src/styles/*"],
      "@components/*": ["src/components/*"],
      "@js/*": ["src/js/*"],
      "@assets/*": ["src/assets/*"]
    }
  }
}
```

Usage example:
```astro
---
import client from "@data/client.json";
import Hero from "@components/Hero.astro";
---
```

### Client Settings (`src/data/client.json`)
Provides site meta and contact information used by `BaseLayout`, `Header`, and `Footer`.

Schema:
```json
{
  "name": "string",
  "email": "string",
  "phoneForTel": "string",
  "phoneFormatted": "string",
  "address": {
    "lineOne": "string",
    "lineTwo": "string",
    "city": "string",
    "state": "string",
    "zip": "string",
    "mapLink": "string"
  },
  "domain": "string"
}
```

### Navigation (`src/data/navData.json`)
Controls the header navigation links.

Schema example:
```json
[
  { "key": "Home", "url": "/" },
  { "key": "EMDR", "url": "/emdr/" },
  { "key": "Services", "url": "/work-with-me/" },
  { "key": "About Me", "url": "/about/" }
]
```

