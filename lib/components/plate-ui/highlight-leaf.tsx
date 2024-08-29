import { cn, withRef } from '@udecode/cn'
import { PlateLeaf } from '@udecode/plate-common/react'

export const HighlightLeaf = withRef<typeof PlateLeaf>(
  ({ children, className, ...props }, ref) => (
    <PlateLeaf
      asChild
      className={cn(
        'pce-bg-slate-900/20 pce-text-inherit  dark:pce-bg-slate-50/20 dark:dark:pce-bg-slate-50/40',
        className
      )}
      ref={ref}
      {...props}
    >
      <mark>{children}</mark>
    </PlateLeaf>
  )
)
