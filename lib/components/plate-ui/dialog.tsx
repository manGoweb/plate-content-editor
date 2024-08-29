'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cn, createPrimitiveElement, withCn, withRef } from '@udecode/cn'

import { Icons } from '@/components/icons'

export const Dialog = DialogPrimitive.Root

export const DialogTrigger = DialogPrimitive.Trigger

export const DialogPortal = DialogPrimitive.Portal

export const DialogClose = DialogPrimitive.Close

export const DialogOverlay = withCn(
  DialogPrimitive.Overlay,
  'pce-fixed pce-inset-0 pce-z-50 pce-bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
)

export const DialogContent = withRef<typeof DialogPrimitive.Content>(
  ({ children, className, ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        className={cn(
          'pce-fixed pce-left-1/2 pce-top-1/2 pce-z-50 pce-grid pce-w-full pce-max-w-lg pce-translate-x-1/2 pce-translate-y-1/2 pce-gap-4 pce-border pce-border-slate-200 pce-bg-white pce-p-6 pce-shadow-lg pce-duration-200 data-[state=open]:pce-animate-in data-[state=closed]:pce-animate-out data-[state=closed]:pce-fade-out-0 data-[state=open]:pce-fade-in-0 data-[state=closed]:pce-zoom-out-95 data-[state=open]:pce-zoom-in-95 data-[state=closed]:pce-slide-out-to-left-1/2 data-[state=closed]:pce-slide-out-to-top-[48%] data-[state=open]:pce-slide-in-from-left-1/2 data-[state=open]:pce-slide-in-from-top-[48%] sm:pce-rounded-lg dark:pce-border-slate-800 dark:pce-bg-slate-950',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="pce-absolute pce-right-4 pce-top-4 pce-rounded-sm pce-opacity-70 pce-ring-offset-white pce-transition-opacity hover:pce-opacity-100 focus:pce-outline-none focus:pce-ring-2 focus:pce-ring-slate-950 focus:pce-ring-offset-2 disabled:pce-pointer-events-none data-[state=open]:pce-bg-slate-100 data-[state=open]:pce-text-slate-500 dark:pce-ring-offset-slate-950 dark:focus:pce-ring-slate-300 dark:data-[state=open]:pce-bg-slate-800 dark:data-[state=open]:pce-text-slate-400">
          <Icons.close className="pce-size-4" />
          <span className="pce-sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
)

export const DialogHeader = withCn(
  createPrimitiveElement('div'),
  'pce-flex pce-flex-col pce-space-y-1.5 pce-text-center sm:pce-text-left'
)

export const DialogFooter = withCn(
  createPrimitiveElement('div'),
  'pce-flex pce-flex-col-reverse sm:pce-flex-row sm:pce-justify-end sm:pce-space-x-2'
)

export const DialogTitle = withCn(
  DialogPrimitive.Title,
  'pce-text-lg pce-font-semibold pce-leading-none pce-tracking-tight'
)

export const DialogDescription = withCn(
  DialogPrimitive.Description,
  'pce-text-sm pce-text-slate-500 dark:pce-text-slate-400'
)
