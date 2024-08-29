import React from 'react'

import type { PlateContentProps } from '@udecode/plate-common/react'
import type { VariantProps } from 'class-variance-authority'

import { cn } from '@udecode/cn'
import { PlateContent } from '@udecode/plate-common/react'
import { cva } from 'class-variance-authority'

const editorVariants = cva(
  cn(
    'pce-relative pce-overflow-x-auto pce-whitespace-pre-wrap pce-break-words',
    'pce-min-h-[80px] pce-w-full pce-rounded-md pce-bg-white pce-px-6 pce-py-2 pce-text-sm pce-ring-offset-white placeholder:pce-text-slate-500 focus-visible:pce-outline-none dark:pce-bg-slate-950 dark:pce-ring-offset-slate-950 dark:pce-placeholder:text-slate-400',
    '[&_[data-slate-placeholder]]:pce-text-slate-500 [&_[data-slate-placeholder]]:!pce-opacity-100 dark:[&_[data-slate-placeholder]]:pce-text-slate-400',
    '[&_[data-slate-placeholder]]:pce-top-[auto_!important]',
    '[&_strong]:pce-font-bold'
  ),
  {
    defaultVariants: {
      focusRing: true,
      size: 'sm',
      variant: 'outline',
    },
    variants: {
      disabled: {
        true: 'pce-cursor-not-allowed pce-opacity-50',
      },
      focusRing: {
        false: 'pce-',
        true: 'focus-visible:pce-ring-2 focus-visible:pce-ring-slate-950 focus-visible:pce-ring-offset-2 dark:focus-visible:pce-ring-slate-300',
      },
      focused: {
        true: 'pce-ring-2 pce-ring-slate-950 pce-ring-offset-2 dark:pce-ring-slate-300',
      },
      size: {
        md: 'pce-text-base',
        sm: 'pce-text-sm',
      },
      variant: {
        ghost: 'pce-',
        outline: 'pce-border pce-border-slate-200 dark:pce-border-slate-800',
      },
    },
  }
)

export type EditorProps = PlateContentProps &
  VariantProps<typeof editorVariants>

const Editor = React.forwardRef<HTMLDivElement, EditorProps>(
  (
    {
      className,
      disabled,
      focusRing,
      focused,
      readOnly,
      size,
      variant,
      ...props
    },
    ref
  ) => {
    return (
      <div className="pce-relative pce-w-full" ref={ref}>
        <PlateContent
          aria-disabled={disabled}
          className={cn(
            editorVariants({
              disabled,
              focusRing,
              focused,
              size,
              variant,
            }),
            className
          )}
          data-plate-selectable
          disableDefaultStyles
          readOnly={disabled ?? readOnly}
          {...props}
        />
      </div>
    )
  }
)
Editor.displayName = 'Editor'

export { Editor }
