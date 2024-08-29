import { cn, withRef } from '@udecode/cn'
import { PlateElement } from '@udecode/plate-common/react'
import { useFocused, useSelected } from 'slate-react'

export const HrElement = withRef<typeof PlateElement>(
  ({ className, nodeProps, ...props }, ref) => {
    const { children } = props

    const selected = useSelected()
    const focused = useFocused()

    return (
      <PlateElement ref={ref} {...props}>
        <div className="pce-py-6" contentEditable={false}>
          <hr
            {...nodeProps}
            className={cn(
              'pce-h-0.5 pce-cursor-pointer pce-rounded-sm pce-border-none pce-bg-slate-100 pce-bg-clip-content dark:pce-bg-slate-800',
              selected &&
                focused &&
                'pce-ring-2 pce-ring-slate-950 pce-ring-offset-2 dark:pce-ring-slate-300',
              className
            )}
          />
        </div>
        {children}
      </PlateElement>
    )
  }
)
