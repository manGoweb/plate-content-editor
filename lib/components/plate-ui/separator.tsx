'use client'

import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { withProps, withVariants } from '@udecode/cn'
import { cva } from 'class-variance-authority'

const separatorVariants = cva(
  'pce-shrink-0 pce-bg-slate-200 dark:pce-bg-slate-800',
  {
    defaultVariants: {
      orientation: 'horizontal',
    },
    variants: {
      orientation: {
        horizontal: 'pce-h-px pce-w-full',
        vertical: 'pce-h-full pce-w-px',
      },
    },
  }
)

export const Separator = withVariants(
  withProps(SeparatorPrimitive.Root, {
    decorative: true,
    orientation: 'horizontal',
  }),
  separatorVariants
)
