# App

## Requirements

- Node.js
- pnpm

```sh
brew install pnpm
```

## Setup

### Install dependencies

```sh
pnpm i
```

## Development

### Demo

```sh
pnpm dev
```

## Usage

### Install

```npmrc
@mangoweb:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=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
```

pnpm i @mangoweb/plate-content-editor

### Contember

#### Dynamic

```tsx
import "@mangoweb/plate-content-editor/plate.css";
const PlateEditorForContember = lazy(
  () => import("@mangoweb/plate-content-editor/contember")
);

<HasOne field="content">
  <StaticRender>
    <Field field="data" />
  </StaticRender>
  <Suspense fallback={<div>Loading...</div>}>
    <PlateEditorForContember field="data" />
  </Suspense>
</HasOne>;
```

#### Static

```tsx
import "@mangoweb/plate-content-editor/plate.css";
import PlateEditorForContember from "@mangoweb/plate-content-editor/contember";

<HasOne field="content">
  <PlateEditorForContember field="data" />
</HasOne>;
```
