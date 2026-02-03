# @jstiehl/alternating-case

Convert text to alternating uppercase and lowercase letters.

## Installation

```bash
npm install @jstiehl/alternating-case
# or using yarn
yarn add @jstiehl/alternating-case
```

---

## Usage

### ESM

```ts
import { alternatingCase } from "@jstiehl/alternating-case";

console.log(alternatingCase("hello world"));
// Output: HeLlO WoRlD

console.log(alternatingCase("hello world", { start: "lower" }));
// Output: hElLo wOrLd
```

---

## API

### `alternatingCase(input: string, options?: { start?: "upper" | "lower" }): string`

| Option  | Type     | Default  | Description |                                                                            |
| ------- | -------- | -------- | ----------- | -------------------------------------------------------------------------- |
| `start` | `"upper" | "lower"` | `"upper"`   | Choose whether the alternating sequence starts with uppercase or lowercase |

- **`input`**: The string to convert
- **Returns**: A string with alternating letter case

---

## Types

- Fully typed for TypeScript
- Import types automatically from:

```ts
import { alternatingCase } from "@jstiehl/alternating-case";
```

---

## License

MIT © James Stiehl
