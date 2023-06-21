# vitest-indexeddb

Add a shim for indexeddb when testing with Vitest.

## Installation

```
yarn add -D vitest-indexeddb
npm i -D vitest-indexeddb
pnpm i -D vitest-indexeddb
```

## Usage

An example project can be found at [/example](../example) for reference.

1. Create a setup file

```typescript
// ./setup/idbSetup.ts

import { setup } from "vitest-indexeddb";

setup();
```

2. Include that setup file in your Vitest config.

```typescript
// ./vite.config.ts

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./setup/idbSetup.ts"],
  },
});
```

3. Run tests
