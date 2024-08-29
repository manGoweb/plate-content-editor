import { withRef } from '@udecode/cn'
import { PlateElement, useElement } from '@udecode/plate-common/react'
import {
  useToggleButton,
  useToggleButtonState,
} from '@udecode/plate-toggle/react'

import { Icons } from '@/components/icons'

export const ToggleElement = withRef<typeof PlateElement>(
  ({ children, ...props }, ref) => {
    const element = useElement()
    const state = useToggleButtonState(element.id as string)
    const { buttonProps, open } = useToggleButton(state)

    return (
      <PlateElement asChild ref={ref} {...props}>
        <div className="pce-relative pce-pl-6">
          <span
            className="pce-absolute pce-left-0.5 pce-top-0.5 pce-flex pce-cursor-pointer pce-select-none pce-items-center pce-justify-center pce-rounded-sm pce-p-px pce-transition-colors hover:pce-bg-slate-200"
            contentEditable={false}
            {...buttonProps}
          >
            {open ? <Icons.chevronDown /> : <Icons.chevronRight />}
          </span>
          {children}
        </div>
      </PlateElement>
    )
  }
)
