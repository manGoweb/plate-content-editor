'use client'

import type { DialogProps } from '@radix-ui/react-dialog'

import { cn, createPrimitiveElement, withCn, withRef } from '@udecode/cn'
import { Command as CommandPrimitive } from 'cmdk'

import { Icons } from '@/components/icons'

import { Dialog, DialogContent } from './dialog'

export const Command = withCn(
  CommandPrimitive,
  'pce-flex pce-size-full pce-flex-col pce-overflow-hidden pce-rounded-md pce-bg-white pce-text-slate-950 dark:pce-bg-slate-950 dark:pce-text-slate-50'
)

export function CommandDialog({ children, ...props }: DialogProps) {
  return (
    <Dialog {...props}>
      <DialogContent className="pce-overflow-hidden pce-p-0 pce-shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:pce-px-2 [&_[cmdk-group-heading]]:pce-font-medium [&_[cmdk-group-heading]]:pce-text-slate-500 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pce-pt-0 [&_[cmdk-group]]:pce-px-2 [&_[cmdk-input-wrapper]_svg]:pce-size-5 [&_[cmdk-input]]:pce-h-12 [&_[cmdk-item]]:pce-px-2 [&_[cmdk-item]]:pce-py-3 [&_[cmdk-item]_svg]:pce-size-5 dark:[&_[cmdk-group-heading]]:pce-text-slate-400">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

export const CommandInput = withRef<typeof CommandPrimitive.Input>(
  ({ className, ...props }, ref) => (
    <div
      className="pce-flex pce-items-center pce-border-b pce-px-3"
      cmdk-input-wrapper=""
    >
      <Icons.search className="pce-mr-2 pce-size-4 pce-shrink-0 pce-opacity-50" />
      <CommandPrimitive.Input
        className={cn(
          'pce-flex pce-h-11 pce-w-full pce-rounded-md pce-bg-transparent pce-py-3 pce-text-sm pce-outline-none placeholder:pce-text-slate-500 disabled:pce-cursor-not-allowed disabled:pce-opacity-50 dark:placeholder:pce-text-slate-400',
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  )
)

export const CommandList = withCn(
  CommandPrimitive.List,
  'pce-max-h-[500px] pce-overflow-y-auto pce-overflow-x-hidden'
)

export const CommandEmpty = withCn(
  CommandPrimitive.Empty,
  'pce-py-6 pce-text-center pce-text-sm'
)

export const CommandGroup = withCn(
  CommandPrimitive.Group,
  'pce-overflow-hidden pce-p-1 pce-text-slate-950 [&_[cmdk-group-heading]]:pce-px-2 [&_[cmdk-group-heading]]:pce-py-1.5 [&_[cmdk-group-heading]]:pce-text-xs [&_[cmdk-group-heading]]:pce-font-medium [&_[cmdk-group-heading]]:pce-text-slate-500 dark:pce-text-slate-50 dark:[&_[cmdk-group-heading]]:pce-text-slate-400'
)

export const CommandSeparator = withCn(
  CommandPrimitive.Separator,
  'pce-mx-1 pce-h-px pce-bg-slate-200 dark:pce-bg-slate-800'
)

export const CommandItem = withCn(
  CommandPrimitive.Item,
  'pce-relative pce-flex pce-cursor-default pce-select-none pce-items-center pce-rounded-sm pce-px-2 pce-py-1.5 pce-text-sm pce-outline-none data-[disabled=true]:pce-pointer-events-none data-[selected=true]:pce-bg-slate-100 data-[selected=true]:pce-text-slate-900 data-[disabled=true]:pce-opacity-50 dark:data-[selected=true]:pce-bg-slate-800 dark:data-[selected=true]:pce-text-slate-50'
)

export const CommandShortcut = withCn(
  createPrimitiveElement('span'),
  'pce-ml-auto pce-text-xs pce-tracking-widest pce-text-slate-500 dark:pce-text-slate-400'
)
