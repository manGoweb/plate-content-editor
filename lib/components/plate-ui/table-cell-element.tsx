import type React from 'react'

import { cn, withProps, withRef } from '@udecode/cn'
import { PlateElement } from '@udecode/plate-common'
import {
  useTableCellElement,
  useTableCellElementResizable,
  useTableCellElementResizableState,
  useTableCellElementState,
} from '@udecode/plate-table'

import { ResizeHandle } from './resizable'

export const TableCellElement = withRef<
  typeof PlateElement,
  {
    hideBorder?: boolean
    isHeader?: boolean
  }
>(({ children, className, hideBorder, isHeader, style, ...props }, ref) => {
  const { element } = props

  const {
    borders,
    colIndex,
    colSpan,
    hovered,
    hoveredLeft,
    isSelectingCell,
    readOnly,
    rowIndex,
    rowSize,
    selected,
  } = useTableCellElementState()
  const { props: cellProps } = useTableCellElement({ element: props.element })
  const resizableState = useTableCellElementResizableState({
    colIndex,
    colSpan,
    rowIndex,
  })

  const { bottomProps, hiddenLeft, leftProps, rightProps } =
    useTableCellElementResizable(resizableState)

  const Cell = isHeader ? 'th' : 'td'

  return (
    <PlateElement
      asChild
      className={cn(
        'pce-relative pce-h-full pce-overflow-visible pce-border-none pce-bg-white pce-p-0 dark:pce-bg-slate-950',
        hideBorder && 'before:pce-border-none',
        element.background
          ? 'pce-bg-[--cellBackground]'
          : 'pce-bg-white dark:pce-bg-slate-950',
        !hideBorder &&
          cn(
            isHeader && 'pce-text-left [&_>_*]:pce-m-0',
            'before:pce-size-full',
            selected &&
              'before:pce-z-10 before:pce-bg-slate-100 dark:pce-before:bg-slate-800',
            'before:pce-absolute before:pce-box-border before:pce-select-none before:content-[]',
            borders &&
              cn(
                borders.bottom?.size &&
                  `before:pce-border-b before:border-b-border`,
                borders.right?.size &&
                  `before:pce-border-r before:border-r-border`,
                borders.left?.size &&
                  `before:pce-border-l before:border-l-border`,
                borders.top?.size &&
                  `before:pce-border-t before:border-t-border`
              )
          ),
        className
      )}
      ref={ref}
      {...cellProps}
      {...props}
      style={
        {
          '--cellBackground': element.background,
          ...style,
        } as React.CSSProperties
      }
    >
      <Cell>
        <div
          className="pce-relative pce-z-20 pce-box-border pce-h-full pce-px-3 pce-py-2"
          style={{
            minHeight: rowSize,
          }}
        >
          {children}
        </div>

        {!isSelectingCell && (
          <div
            className="pce-group pce-absolute pce-top-0 pce-size-full pce-select-none"
            contentEditable={false}
            suppressContentEditableWarning={true}
          >
            {!readOnly && (
              <>
                <ResizeHandle
                  {...rightProps}
                  className="pce-top-3 pce-right-[-5px] pce-w-[10px]"
                />
                <ResizeHandle
                  {...bottomProps}
                  className="pce-bottom-[-5px] pce-h-[10px]"
                />
                {!hiddenLeft && (
                  <ResizeHandle
                    {...leftProps}
                    className="pce-top-3 pce-left-[-5px] pce-w-[10px]"
                  />
                )}

                {hovered && (
                  <div
                    className={cn(
                      'pce-absolute pce-top-3 pce-z-30 pce-h-[calc(100%_+_12px)] pce-w-1 pce-bg-slate-950 dark:pce-bg-slate-300',
                      'pce-right-[-1.5px]'
                    )}
                  />
                )}
                {hoveredLeft && (
                  <div
                    className={cn(
                      'pce-absolute pce-top-3 pce-z-30 pce-h-[calc(100%_+_12px)] pce-w-1 pce-bg-slate-950 dark:pce-bg-slate-300',
                      'pce-left-[-1.5px]'
                    )}
                  />
                )}
              </>
            )}
          </div>
        )}
      </Cell>
    </PlateElement>
  )
})

TableCellElement.displayName = 'TableCellElement'

export const TableCellHeaderElement = withProps(TableCellElement, {
  isHeader: true,
})
