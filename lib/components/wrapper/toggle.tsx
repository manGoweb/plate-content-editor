'use client'

import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cn, withVariants } from '@udecode/cn'
import { cva } from 'class-variance-authority'

export const toggleVariants = cva(
  cn(
    'pce-inline-flex pce-items-center pce-justify-center pce-rounded-md pce-text-sm pce-font-medium pce-ring-offset-background pce-transition-colors focus-visible:pce-outline-none focus-visible:pce-ring-2 focus-visible:pce-ring-ring focus-visible:pce-ring-offset-2 disabled:pce-pointer-events-none disabled:pce-opacity-50',
    '[&_svg:not([data-icon])]:pce-size-5'
  ),
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        circle: 'pce-p-3',
        default: 'pce-h-10 pce-px-0',
        lg: 'pce-h-11 pce-px-5',
        sm: 'pce-h-9 pce-px-2.5',
      },
      variant: {
        default:
          'pce-bg-transparent hover:pce-bg-muted hover:pce-text-muted-foreground data-[state=on]:pce-bg-accent data-[state=on]:text-accent-foreground',
        floating: 'pce-rounded-full pce-bg-primary text-primary-foreground',
        outline:
          'pce-border pce-border-input pce-bg-transparent hover:pce-bg-accent hover:pce-text-accent-foreground',
      },
    },
  }
)

export const Toggle = withVariants(TogglePrimitive.Root, toggleVariants, [
  'size',
  'variant',
])
