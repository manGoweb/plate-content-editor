'use client'

import * as React from 'react'

import * as ToolbarPrimitive from '@radix-ui/react-toolbar'
import { cn, withCn, withRef, withVariants } from '@udecode/cn'
import { type VariantProps, cva } from 'class-variance-authority'

import { Icons } from '@/components/icons'

import { Separator } from './separator'
import { withTooltip } from './tooltip'

export const Toolbar = withCn(
  ToolbarPrimitive.Root,
  'pce-relative pce-flex pce-select-none pce-items-center pce-gap-1 pce-bg-white dark:pce-bg-slate-950'
)

export const ToolbarToggleGroup = withCn(
  ToolbarPrimitive.ToolbarToggleGroup,
  'pce-flex pce-items-center'
)

export const ToolbarLink = withCn(
  ToolbarPrimitive.Link,
  'pce-font-medium pce-underline pce-underline-offset-4'
)

export const ToolbarSeparator = withCn(
  ToolbarPrimitive.Separator,
  'pce-my-1 pce-w-px pce-shrink-0 pce-bg-slate-200 dark:pce-bg-slate-800'
)

const toolbarButtonVariants = cva(
  cn(
    'pce-inline-flex pce-items-center pce-justify-center pce-rounded-md pce-text-sm pce-font-medium pce-ring-offset-white pce-transition-colors focus-visible:pce-outline-none focus-visible:pce-ring-2 focus-visible:pce-ring-slate-950 focus-visible:pce-ring-offset-2 disabled:pce-pointer-events-none disabled:pce-opacity-50 dark:pce-ring-offset-slate-950 dark:pce-focus-visible:ring-slate-300',
    '[&_svg:not([data-icon])]:pce-size-5'
  ),
  {
    defaultVariants: {
      size: 'sm',
      variant: 'default',
    },
    variants: {
      size: {
        default: 'pce-h-10 pce-px-3',
        lg: 'pce-h-11 pce-px-5',
        sm: 'pce-h-9 pce-px-2',
      },
      variant: {
        default:
          'pce-bg-transparent hover:pce-bg-slate-100 hover:pce-text-slate-500 aria-checked:pce-bg-slate-100 aria-checked:pce-text-slate-900 dark:hover:pce-bg-slate-800 dark:hover:pce-text-slate-400 dark:aria-checked:pce-bg-slate-800 dark:aria-checked:pce-text-slate-50',
        outline:
          'pce-border pce-border-slate-200 pce-bg-transparent hover:pce-bg-slate-100 hover:pce-text-slate-900 dark:pce-border-slate-800 dark:hover:pce-bg-slate-800 dark:hover:pce-text-slate-50',
      },
    },
  }
)

const ToolbarButton = withTooltip(
  // eslint-disable-next-line react/display-name
  React.forwardRef<
    React.ElementRef<typeof ToolbarToggleItem>,
    {
      isDropdown?: boolean
      pressed?: boolean
    } & Omit<
      React.ComponentPropsWithoutRef<typeof ToolbarToggleItem>,
      'asChild' | 'value'
    > &
      VariantProps<typeof toolbarButtonVariants>
  >(
    (
      { children, className, isDropdown, pressed, size, variant, ...props },
      ref
    ) => {
      return typeof pressed === 'boolean' ? (
        <ToolbarToggleGroup
          disabled={props.disabled}
          type="single"
          value="single"
        >
          <ToolbarToggleItem
            className={cn(
              toolbarButtonVariants({
                size,
                variant,
              }),
              isDropdown && 'pce-my-1 pce-justify-between pce-pr-1',
              className
            )}
            ref={ref}
            value={pressed ? 'single' : ''}
            {...props}
          >
            {isDropdown ? (
              <>
                <div className="pce-flex pce-flex-1">{children}</div>
                <div>
                  <Icons.arrowDown
                    className="pce-ml-0.5 pce-size-4"
                    data-icon
                  />
                </div>
              </>
            ) : (
              children
            )}
          </ToolbarToggleItem>
        </ToolbarToggleGroup>
      ) : (
        <ToolbarPrimitive.Button
          className={cn(
            toolbarButtonVariants({
              size,
              variant,
            }),
            isDropdown && 'pce-pr-1',
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </ToolbarPrimitive.Button>
      )
    }
  )
)
ToolbarButton.displayName = 'ToolbarButton'

export { ToolbarButton }

export const ToolbarToggleItem = withVariants(
  ToolbarPrimitive.ToggleItem,
  toolbarButtonVariants,
  ['variant', 'size']
)

export const ToolbarGroup = withRef<
  'div',
  {
    noSeparator?: boolean
  }
>(({ children, className, noSeparator }, ref) => {
  const childArr = React.Children.map(children, (c) => c)

  if (!childArr || childArr.length === 0) return null

  return (
    <div className={cn('pce-flex', className)} ref={ref}>
      {!noSeparator && (
        <div className="pce-h-full pce-py-1">
          <Separator orientation="vertical" />
        </div>
      )}

      <div className="pce-mx-1 pce-flex pce-items-center pce-gap-1">
        {children}
      </div>
    </div>
  )
})
