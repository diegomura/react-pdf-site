import EditButton from '../src/components/Docs/EditButton'
import NavigationButtons from '../src/components/Docs/NavigationButtons'

### Compatibility with Node.js

We currently test react-pdf against Node.js 18, 20, and 21 (latest minors), so these are the versions we recommend using. Chances are you may use react-pdf with older versions of Node.js as well, but we can't guarantee it will work as expected.

### Compatibility with Bun

While we don't officially support Bun, we have received reports that it works well with react-pdf.

### Compatibility with React

react-pdf is compatible with React 16 (16.8.0 or later), React 17, and React 18.

### Compatibility with Next.js

In general, you may use react-pdf with Next.js regardless of the version. However, before Next.js 14.1.1, Next.js (App Router) suffered from a bug that caused the Next.js server to crash when using react-pdf. If you encounter:

```
TypeError: ba.Component is not a constructor
```

You should upgrade to Next.js 14.1.1 or later.

If that's not possible, update your Next.js config like this:

```js
const nextConfig = {
  // …
  experimental: {
    // …
    serverComponentsExternalPackages: ['@react-pdf/renderer'],
  }
};
```

### Compatibility with esbuild

If you are using esbuild to bundle your react-pdf application in ESM mode, you may encounter an error:

```
__dirname is not defined in ES module scope
```

This is because our dependency, [Yoga layout](https://yogalayout.com/), uses `__dirname` in their code.

This will be fixed by the upcoming release of Yoga layout, but for now, you can work around this issue by using the `inject` option in esbuild.

Create a file called `cjs-shim.ts`:

```ts
import { createRequire } from 'node:module';
import path from 'node:path';
import url from 'node:url';

globalThis.require = createRequire(import.meta.url);
globalThis.__filename = url.fileURLToPath(import.meta.url);
globalThis.__dirname = path.dirname(__filename);
```

Then, add it to your `esbuild.ts`:

```ts
await esbuild.build({
  // …
  inject: ['cjs-shim.ts'],
});
```

And you should be good to go!

<NavigationButtons
  nextSrc="/rendering-process"
  nextText="Rendering process"
/>
