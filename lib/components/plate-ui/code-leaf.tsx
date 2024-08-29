'use client'

import { cn, withRef } from '@udecode/cn'
import { PlateLeaf } from '@udecode/plate-common/react'

export const CodeLeaf = withRef<typeof PlateLeaf>(
  ({ children, className, ...props }, ref) => {
    return (
      <PlateLeaf
        asChild
        className={cn(
          'pce-whitespace-pre-wrap pce-rounded-md pce-bg-slate-100 pce-px-[0.3em] pce-py-[0.2em] pce-font-mono pce-text-sm dark:pce-bg-slate-800',
          className
        )}
        ref={ref}
        {...props}
      >
        <code>{children}</code>
      </PlateLeaf>
    )
  }
)
