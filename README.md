# vitest-indexdb

Add a shim for IndexdDB when testing with Vitest.

## Installation

```
yarn add -D vitest-indexdb
npm i -D vitest-indexdb
pnpm i -D vitest-indexdb
```

## Usage

1. Create a setup file

```typescript
// ./setup/idbSetup.ts

import {setup} from 'vitest-indexddb';

setup();
```

2. Include that setup file in your Vitest config.

```typescript
// ./vite.config.ts

import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./setup/idbSetup.ts"]
  }
})
```

3. Run tests 
