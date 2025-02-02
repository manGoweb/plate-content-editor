# App

<img width="1394" alt="image" src="https://github.com/user-attachments/assets/fd4c9a7e-2f44-477a-95ef-fb2a60eb2aa6">

## Requirements

- React 19 (When using npm package)
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
//npm.pkg.github.com/:_authToken=ghp_YOUR_TOKEN
```

[Generate a new token](https://github.com/settings/tokens/new)

read:packages

```sh
pnpm i @mangoweb/plate-content-editor
```

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

### Next

#### RSC

(Text and images would be rendered during static generation)

```tsx
"use client";

import type { PlateEditorValue } from "@mangoweb/plate-content-editor";

import "@mangoweb/plate-content-editor/plate.css";
import Plate from "@mangoweb/plate-content-editor/readonly";

type BlogContentRenderProps = {
  content: unknown;
};
export const BlogContentRender = (props: BlogContentRenderProps) => {
  const { content } = props;

  const parsed = content as PlateEditorValue;
  return <Plate value={parsed} />;
};
```

#### Dynamic

```tsx
"use client";

import "@mangoweb/plate-content-editor/plate.css";
const Plate = dynamic(() => import("@mangoweb/plate-content-editor/readonly"), {
  loading: () => <p>Loading...</p>,
});

type BlogContentRenderProps = {
  content: unknown;
};
export const BlogContentRender = (props: BlogContentRenderProps) => {
  const { content } = props;

  const parsed = content as PlateEditorValue;
  return <Plate value={parsed} />;
};
```

### Monorepo

```sh
git clone --depth 1 https://github.com/manGoweb/plate-content-editor.git
rm -rf plate-content-editor/.git
```

Replace `@mangoweb/plate-content-editor` with your monorepo name and add package to workspace
