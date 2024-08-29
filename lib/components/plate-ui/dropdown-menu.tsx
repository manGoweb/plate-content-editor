'use client'
import { useCallback, useState } from 'react'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import {
  cn,
  createPrimitiveElement,
  withCn,
  withProps,
  withRef,
  withVariants,
} from '@udecode/cn'
import { cva } from 'class-variance-authority'

import { Icons } from '@/components/icons'

export const DropdownMenu = DropdownMenuPrimitive.Root

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

export const DropdownMenuGroup = DropdownMenuPrimitive.Group

export const DropdownMenuPortal = DropdownMenuPrimitive.Portal

export const DropdownMenuSub = DropdownMenuPrimitive.Sub

export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

export const DropdownMenuSubTrigger = withRef<
  typeof DropdownMenuPrimitive.SubTrigger,
  {
    inset?: boolean
  }
>(({ children, className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    className={cn(
      'pce-flex pce-cursor-default pce-select-none pce-items-center pce-rounded-sm pce-px-2 pce-py-1.5 pce-text-sm pce-outline-none focus:pce-bg-slate-100 data-[state=open]:pce-bg-slate-100 dark:focus:pce-bg-slate-800 dark:data-[state=open]:pce-bg-slate-800',
      'data-[disabled]:pce-pointer-events-none data-[disabled]:pce-opacity-50',
      inset && 'pce-pl-8',
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
    <Icons.chevronRight className="pce-ml-auto pce-size-4" />
  </DropdownMenuPrimitive.SubTrigger>
))

export const DropdownMenuSubContent = withCn(
  DropdownMenuPrimitive.SubContent,
  'pce-z-50 pce-min-w-32 pce-overflow-hidden pce-rounded-md pce-border pce-border-slate-200 pce-bg-white pce-p-1 pce-text-slate-950 pce-shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:pce-border-slate-800 dark:pce-bg-slate-950 dark:pce-text-slate-50'
)

const DropdownMenuContentVariants = withProps(DropdownMenuPrimitive.Content, {
  className: cn(
    'pce-z-50 min-w-32 pce-overflow-hidden pce-rounded-md pce-border pce-border-slate-200 pce-bg-white pce-p-1 pce-text-slate-950 pce-shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:pce-border-slate-800 dark:pce-bg-slate-950 dark:pce-text-slate-50'
  ),
  sideOffset: 4,
})

export const DropdownMenuContent = withRef<
  typeof DropdownMenuPrimitive.Content
>(({ ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuContentVariants ref={ref} {...props} />
  </DropdownMenuPrimitive.Portal>
))

const menuItemVariants = cva(
  cn(
    'pce-relative pce-flex pce-h-9 pce-cursor-pointer pce-select-none pce-items-center pce-rounded-sm pce-px-2 pce-py-1.5 pce-text-sm pce-outline-none pce-transition-colors',
    'focus:pce-bg-slate-100 focus:pce-text-slate-900 data-[disabled]:pce-pointer-events-none data-[disabled]:pce-opacity-50 dark:pce-focus:bg-slate-800 dark:focus:pce-text-slate-50'
  ),
  {
    variants: {
      inset: {
        true: 'pce-pl-8',
      },
    },
  }
)

export const DropdownMenuItem = withVariants(
  DropdownMenuPrimitive.Item,
  menuItemVariants,
  ['inset']
)

export const DropdownMenuCheckboxItem = withRef<
  typeof DropdownMenuPrimitive.CheckboxItem
>(({ children, className, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    className={cn(
      'pce-relative pce-flex pce-select-none pce-items-center pce-rounded-sm pce-py-1.5 pce-pl-8 pce-pr-2 pce-text-sm pce-outline-none pce-transition-colors focus:pce-bg-slate-100 focus:pce-text-slate-900 data-[disabled]:pce-pointer-events-none data-[disabled]:pce-opacity-50 dark:focus:pce-bg-slate-800 dark:focus:pce-text-slate-50',
      'pce-cursor-pointer',
      className
    )}
    ref={ref}
    {...props}
  >
    <span className="pce-absolute pce-left-2 pce-flex pce-size-3.5 pce-items-center pce-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Icons.check className="pce-size-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))

export const DropdownMenuRadioItem = withRef<
  typeof DropdownMenuPrimitive.RadioItem,
  {
    hideIcon?: boolean
  }
>(({ children, className, hideIcon, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    className={cn(
      'pce-relative pce-flex pce-select-none pce-items-center pce-rounded-sm pce-pl-8 pce-pr-2 pce-text-sm pce-outline-none pce-transition-colors focus:pce-bg-slate-100 focus:pce-text-slate-900 data-[disabled]:pce-pointer-events-none data-[disabled]:pce-opacity-50 dark:focus:pce-bg-slate-800 dark:focus:pce-text-slate-50',
      'pce-h-9 pce-cursor-pointer pce-px-2 data-[state=checked]:pce-bg-slate-100 data-[state=checked]:pce-text-slate-900 dark:data-[state=checked]:pce-bg-slate-800 dark:data-[state=checked]:pce-text-slate-50',
      className
    )}
    ref={ref}
    {...props}
  >
    {!hideIcon && (
      <span className="pce-absolute pce-right-2 pce-flex pce-size-3.5 pce-items-center pce-justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Icons.check className="pce-size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
    )}
    {children}
  </DropdownMenuPrimitive.RadioItem>
))

const dropdownMenuLabelVariants = cva(
  cn('pce-select-none pce-px-2 pce-py-1.5 pce-text-sm pce-font-semibold'),
  {
    variants: {
      inset: {
        true: 'pce-pl-8',
      },
    },
  }
)

export const DropdownMenuLabel = withVariants(
  DropdownMenuPrimitive.Label,
  dropdownMenuLabelVariants,
  ['inset']
)

export const DropdownMenuSeparator = withCn(
  DropdownMenuPrimitive.Separator,
  'pce-mx-1 pce-my-1 pce-h-px pce-bg-slate-100 dark:pce-bg-slate-800'
)

export const DropdownMenuShortcut = withCn(
  createPrimitiveElement('span'),
  'pce-ml-auto pce-text-xs pce-tracking-widest pce-opacity-60'
)

export const useOpenState = () => {
  const [open, setOpen] = useState(false)

  const onOpenChange = useCallback(
    (_value = !open) => {
      setOpen(_value)
    },
    [open]
  )

  return {
    onOpenChange,
    open,
  }
}
