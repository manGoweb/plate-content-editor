import { withCn } from '@udecode/cn'

import { Toolbar } from './toolbar'

export const FixedToolbar = withCn(
  Toolbar,
  'supports-backdrop-blur:bg-white/60 pce-sticky pce-left-0 pce-top-0 pce-z-50 pce-w-full pce-justify-between pce-overflow-x-auto pce-rounded-t-lg pce-border-b border-b-border pce-bg-white/95 pce-backdrop-blur dark:supports-backdrop-blur:bg-slate-950/60 dark:pce-bg-slate-950/95'
)
