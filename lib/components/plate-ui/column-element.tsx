import type { TColumnElement } from '@udecode/plate-layout'

import { cn, withRef } from '@udecode/cn'
import { PlateElement, useElement, withHOC } from '@udecode/plate-common/react'
import { ResizableProvider } from '@udecode/plate-resizable'
import { useReadOnly } from 'slate-react'

export const ColumnElement = withHOC(
  ResizableProvider,
  withRef<typeof PlateElement>(({ children, className, ...props }, ref) => {
    const readOnly = useReadOnly()
    const { width } = useElement<TColumnElement>()

    return (
      <PlateElement
        className={cn(
          className,
          !readOnly &&
            'pce-rounded-lg pce-border pce-border-slate-200 pce-border-dashed pce-p-1.5 dark:pce-border-slate-800'
        )}
        ref={ref}
        style={{ width }}
        {...props}
      >
        {children}
      </PlateElement>
    )
  })
)
