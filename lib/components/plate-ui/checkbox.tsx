'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { cn, withRef } from '@udecode/cn'

import { Icons } from '@/components/icons'

export const Checkbox = withRef<typeof CheckboxPrimitive.Root>(
  ({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root
      className={cn(
        'pce-peer pce-size-4 pce-shrink-0 pce-rounded-sm pce-border pce-border-slate-200  pce-bg-white pce-ring-offset-white focus-visible:pce-outline-none focus-visible:pce-ring-2 focus-visible:pce-ring-slate-950 focus-visible:pce-ring-offset-2 disabled:pce-cursor-not-allowed disabled:pce-opacity-50 data-[state=checked]:pce-bg-slate-900 data-[state=checked]:pce-text-slate-50 dark:pce-border-slate-800  dark:pce-bg-slate-950 dark:pce-ring-offset-slate-950 dark:focus-visible:pce-ring-slate-300 dark:data-[state=checked]:pce-bg-slate-50 dark:data-[state=checked]:pce-text-slate-900',
        className
      )}
      ref={ref}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn(
          'pce-flex pce-items-center pce-justify-center pce-text-current'
        )}
      >
        <Icons.check className="pce-size-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
)
