import { cn, withRef } from '@udecode/cn'
import { PlateLeaf } from '@udecode/plate-common'

export const KbdLeaf = withRef<typeof PlateLeaf>(
  ({ children, className, ...props }, ref) => (
    <PlateLeaf
      asChild
      className={cn(
        'pce-rounded pce-border pce-border-slate-200 pce-bg-slate-100 pce-px-1.5 pce-py-0.5 pce-font-mono pce-text-sm pce-shadow-[rgba(255,_255,_255,_0.1)_0px_0.5px_0px_0px_inset,_rgb(248,_249,_250)_0px_1px_5px_0px_inset,_rgb(193,_200,_205)_0px_0px_0px_0.5px,_rgb(193,_200,_205)_0px_2px_1px_-1px,_rgb(193,_200,_205)_0px_1px_0px_0px] dark:pce-shadow-[rgba(255,_255,_255,_0.1)_0px_0.5px_0px_0px_inset,_rgb(26,_29,_30)_0px_1px_5px_0px_inset,_rgb(76,_81,_85)_0px_0px_0px_0.5px,_rgb(76,_81,_85)_0px_2px_1px_-1px,_rgb(76,_81,_85)_0px_1px_0px_0px] dark:pce-border-slate-800 dark:pce-bg-slate-800',
        className
      )}
      ref={ref}
      {...props}
    >
      <kbd>{children}</kbd>
    </PlateLeaf>
  )
)
