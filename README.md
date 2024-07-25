# App

<img width="1394" alt="image" src="https://github.com/user-attachments/assets/fd4c9a7e-2f44-477a-95ef-fb2a60eb2aa6">

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

### Next

#### RSC

(Text and images would be rendered during static generation)

```tsx
'use client'

import type { PlateEditorValue } from '@mangoweb/plate-content-editor'

import "@mangoweb/plate-content-editor/plate.css"
import Plate from '@mangoweb/plate-content-editor/readonly'

type BlogContentRenderProps = {
  content: unknown
}
export const BlogContentRender = (props: BlogContentRenderProps) => {
  const { content } = props

  const parsed = content as PlateEditorValue
  return <Plate value={parsed} />
}
```

#### Dynamic

```tsx
'use client'

const Plate = dynamic(() => import('@mangoweb/plate-content-editor/readonly'), {
  loading: () => <p>Loading...</p>,
})

type BlogContentRenderProps = {
  content: unknown
}
export const BlogContentRender = (props: BlogContentRenderProps) => {
  const { content } = props

  const parsed = content as PlateEditorValue
  return <Plate value={parsed} />
}
```
