'use client'

import React from 'react'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { withCn, withProps } from '@udecode/cn'

export const TooltipProvider = TooltipPrimitive.Provider

export const Tooltip = TooltipPrimitive.Root

export const TooltipTrigger = TooltipPrimitive.Trigger

export const TooltipPortal = TooltipPrimitive.Portal

export const TooltipContent = withCn(
  withProps(TooltipPrimitive.Content, {
    sideOffset: 4,
  }),
  'pce-z-50 pce-overflow-hidden pce-rounded-md pce-border pce-border-slate-200 pce-bg-white pce-px-3 pce-py-1.5 pce-text-sm pce-text-slate-950 pce-shadow-md dark:pce-border-slate-800 dark:pce-bg-slate-950 dark:pce-text-slate-50'
)

export function withTooltip<
  T extends React.ComponentType<any> | keyof HTMLElementTagNameMap,
>(Component: T) {
  return React.forwardRef<
    React.ElementRef<T>,
    {
      tooltip?: React.ReactNode
      tooltipContentProps?: Omit<
        React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
        'children'
      >
      tooltipProps?: Omit<
        React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>,
        'children'
      >
    } & React.ComponentPropsWithoutRef<T>
  >(function ExtendComponent(
    { tooltip, tooltipContentProps, tooltipProps, ...props },
    ref
  ) {
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
      setMounted(true)
    }, [])

    const component = <Component ref={ref} {...(props as any)} />

    if (tooltip && mounted) {
      return (
        <Tooltip {...tooltipProps}>
          <TooltipTrigger asChild>{component}</TooltipTrigger>

          <TooltipPortal>
            <TooltipContent {...tooltipContentProps}>{tooltip}</TooltipContent>
          </TooltipPortal>
        </Tooltip>
      )
    }

    return component
  })
}
