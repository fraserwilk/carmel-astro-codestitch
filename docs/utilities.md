## Utilities / Public APIs

### `src/js/util.js`

#### `formatDate(date: string | number | Date): string`
Formats a date to `en-AU` locale with the `Australia/Sydney` timezone.

Example:
```js
import { formatDate } from "@js/util.js";

console.log(formatDate("2025-08-20")); // e.g., "Aug 20, 2025"
```

Notes:
- Uses `toLocaleDateString` with options `{ month: 'short', day: 'numeric', year: 'numeric' }`.
- Ensure the input date is parseable by `new Date(...)`.

