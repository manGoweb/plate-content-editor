'use client'

import * as PopoverPrimitive from '@radix-ui/react-popover'
import { cn, withRef } from '@udecode/cn'
import { cva } from 'class-variance-authority'

export const Popover = PopoverPrimitive.Root

export const PopoverTrigger = PopoverPrimitive.Trigger

export const PopoverAnchor = PopoverPrimitive.Anchor

export const popoverVariants = cva(
  'pce-w-72 pce-rounded-md pce-border pce-border-slate-200 pce-bg-white pce-p-4 pce-text-slate-950 pce-shadow-md pce-outline-none data-[state=open]:pce-animate-in data-[state=closed]:pce-animate-out data-[state=closed]:pce-fade-out-0 data-[state=open]:pce-fade-in-0 data-[state=closed]:pce-zoom-out-95 data-[state=open]:pce-zoom-in-95 data-[side=bottom]:pce-slide-in-from-top-2 data-[side=left]:pce-slide-in-from-right-2 data-[side=right]:pce-slide-in-from-left-2 data-[side=top]:pce-slide-in-from-bottom-2 print:pce-hidden dark:pce-border-slate-800 dark:pce-bg-slate-950 dark:pce-text-slate-50'
)

export const PopoverContent = withRef<typeof PopoverPrimitive.Content>(
  ({ align = 'center', className, sideOffset = 4, style, ...props }, ref) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        align={align}
        className={cn(popoverVariants(), className)}
        ref={ref}
        sideOffset={sideOffset}
        style={{ zIndex: 1000, ...style }}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
)
