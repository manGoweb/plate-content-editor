'use client'

import { cn, withRef } from '@udecode/cn'
import { PlateElement } from '@udecode/plate-common/react'

export const BlockquoteElement = withRef<typeof PlateElement>(
  ({ children, className, ...props }, ref) => {
    return (
      <PlateElement
        asChild
        className={cn('pce-my-1 pce-border-l-2 pce-pl-6 pce-italic', className)}
        ref={ref}
        {...props}
      >
        <blockquote>{children}</blockquote>
      </PlateElement>
    )
  }
)
