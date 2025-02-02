'use client'

import type { ClassNames, TEditor } from '@udecode/plate-common'
import type { DropTargetMonitor } from 'react-dnd'

import { cn, withRef } from '@udecode/cn'
import {
  type PlateElementProps,
  useEditorRef,
} from '@udecode/plate-common/react'
import {
  type DragItemNode,
  useDraggable,
  useDraggableState,
} from '@udecode/plate-dnd'
import { BlockSelectionPlugin } from '@udecode/plate-selection/react'

import { Icons } from '@/components/icons'

import {
  Tooltip,
  //TooltipContent,
  //TooltipPortal,
  TooltipTrigger,
} from './tooltip'

export interface DraggableProps
  extends PlateElementProps,
    ClassNames<{
      /** Block. */
      block: string

      /** Block and gutter. */
      blockAndGutter: string

      /** Block toolbar in the gutter. */
      blockToolbar: string

      /**
       * Block toolbar wrapper in the gutter left. It has the height of a line
       * of the pce-block.
       */
      blockToolbarWrapper: string

      blockWrapper: string

      /** Button to dnd the pce-block, in the pce-block toolbar. */
      dragHandle: string

      /** Icon of the drag button, in the drag icon. */
      dragIcon: string

      /** Show a dropline above or below the pce-block when dragging a pce-block. */
      dropLine: string

      /** Gutter at the left side of the editor. It has the height of the pce-block */
      gutterLeft: string
    }> {
  /**
   * Intercepts the drop handling. If `false` is returned, the default drop
   * behavior is called after. If `true` is returned, the default behavior is
   * not called.
   */
  onDropHandler?: (
    editor: TEditor,
    props: {
      dragItem: DragItemNode
      id: string
      monitor: DropTargetMonitor<DragItemNode, unknown>
      nodeRef: any
    }
  ) => boolean
}

const DragHandle = () => {
  const editor = useEditorRef()

  return (
    <Tooltip>
      <TooltipTrigger type="button">
        <Icons.dragHandle
          className="pce-size-4 pce-text-slate-500 dark:pce-text-slate-400"
          onClick={(event) => {
            event.stopPropagation()
            event.preventDefault()

            // if (element.id) {
            //   editor.getApi(BlockSelectionPlugin).blockSelection.addSelectedRow(element.id as string);
            //   api.blockContextMenu.show(editor.id, event as any);
            // }
          }}
          onMouseDown={() => {
            editor
              .getApi(BlockSelectionPlugin)
              .blockSelection.resetSelectedIds()
          }}
        />
      </TooltipTrigger>
      {/* <TooltipPortal>
        <TooltipContent>Drag to move</TooltipContent>
      </TooltipPortal> */}
    </Tooltip>
  )
}

export const Draggable = withRef<'div', DraggableProps>(
  ({ className, classNames = {}, onDropHandler, ...props }, ref) => {
    const { children, element } = props

    const state = useDraggableState({ element, onDropHandler })
    const { dropLine, isDragging, isHovered } = state
    const {
      droplineProps,
      groupProps,
      gutterLeftProps,
      handleRef,
      previewRef,
    } = useDraggable(state)

    return (
      <div
        className={cn(
          'pce-relative',
          isDragging && 'pce-opacity-50',
          'pce-group',
          className
        )}
        ref={ref}
        {...groupProps}
      >
        <div
          className={cn(
            'pce-pointer-events-none pce-absolute -pce-top-px pce-z-50 pce-flex pce-h-full -pce-translate-x-full pce-cursor-text pce-opacity-0 group-hover:pce-opacity-100',
            classNames.gutterLeft
          )}
          {...gutterLeftProps}
        >
          <div
            className={cn(
              'pce-flex pce-h-[1.5em]',
              classNames.blockToolbarWrapper
            )}
          >
            <div
              className={cn(
                'pce-pointer-events-auto pce-mr-1 pce-flex pce-items-center',
                classNames.blockToolbar
              )}
            >
              <div
                className="pce-size-4"
                data-key={element.id as string}
                ref={handleRef}
              >
                {isHovered && <DragHandle />}
              </div>
            </div>
          </div>
        </div>

        <div className={classNames.blockWrapper} ref={previewRef}>
          {children}

          {!!dropLine && (
            <div
              className={cn(
                'pce-absolute pce-inset-x-0 pce-h-0.5 pce-opacity-100',
                'bg-ring',
                dropLine === 'top' && '-pce-top-px',
                dropLine === 'bottom' && '-pce-bottom-px',
                classNames.dropLine
              )}
              {...droplineProps}
            />
          )}
        </div>
      </div>
    )
  }
)
