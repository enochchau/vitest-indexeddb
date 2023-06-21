# vitest-indexddb

Add a shim for IndexdDB when testing with Vitest.

## Installation

```
yarn add -D vitest-indexddb
npm i -D vitest-indexddb
pnpm i -D vitest-indexddb
```

## Usage

An example project can be found at [/example](../example) for reference.

1. Create a setup file

```typescript
// ./setup/idbSetup.ts

import { setup } from "vitest-indexddb";

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
