import { cn, withRef } from '@udecode/cn'
import { PlateElement } from '@udecode/plate-common'
import {
  useTodoListElement,
  useTodoListElementState,
} from '@udecode/plate-list'

import { Checkbox } from './checkbox'

export const TodoListElement = withRef<typeof PlateElement>(
  ({ children, className, ...props }, ref) => {
    const { element } = props
    const state = useTodoListElementState({ element })
    const { checkboxProps } = useTodoListElement(state)

    return (
      <PlateElement
        className={cn('pce-flex pce-flex-row pce-py-1', className)}
        ref={ref}
        {...props}
      >
        <div
          className="pce-mr-1.5 pce-flex pce-select-none pce-items-center pce-justify-center"
          contentEditable={false}
        >
          <Checkbox {...checkboxProps} />
        </div>
        <span
          className={cn(
            'pce-flex-1 focus:pce-outline-none',
            state.checked &&
              'pce-text-slate-500 pce-line-through dark:pce-text-slate-400'
          )}
          contentEditable={!state.readOnly}
          suppressContentEditableWarning
        >
          {children}
        </span>
      </PlateElement>
    )
  }
)
