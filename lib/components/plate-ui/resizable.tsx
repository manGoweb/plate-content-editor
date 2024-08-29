'use client'

import { cn, withRef, withVariants } from '@udecode/cn'
import {
  Resizable as ResizablePrimitive,
  ResizeHandle as ResizeHandlePrimitive,
} from '@udecode/plate-resizable'
import { cva } from 'class-variance-authority'

export const mediaResizeHandleVariants = cva(
  cn(
    'pce-top-0 pce-flex pce-w-6 pce-select-none pce-flex-col pce-justify-center',
    'after:pce-flex after:pce-h-16 after:pce-w-[3px] after:pce-rounded-[6px] after:pce-bg-slate-950 after:pce-opacity-0 after:pce-content-[_] group-hover:after:pce-opacity-100 dark:pce-after:bg-slate-300'
  ),
  {
    variants: {
      direction: {
        left: 'pce-left-3 pce-ml-3 pce-pl-3',
        right: 'pce-right-3 pce-mr-3 pce-items-end pce-pr-3',
      },
    },
  }
)

const resizeHandleVariants = cva(cn('pce-absolute pce-z-40'), {
  variants: {
    direction: {
      bottom: 'pce-w-full pce-cursor-row-resize',
      left: 'pce-h-full pce-cursor-col-resize',
      right: 'pce-h-full pce-cursor-col-resize',
      top: 'pce-w-full pce-cursor-row-resize',
    },
  },
})

const ResizeHandleVariants = withVariants(
  ResizeHandlePrimitive,
  resizeHandleVariants,
  ['direction']
)

export const ResizeHandle = withRef<typeof ResizeHandlePrimitive>(
  (props, ref) => (
    <ResizeHandleVariants
      direction={props.options?.direction}
      ref={ref}
      {...props}
    />
  )
)

const resizableVariants = cva('pce-', {
  variants: {
    align: {
      center: 'pce-mx-auto',
      left: 'pce-mr-auto',
      right: 'pce-ml-auto',
    },
  },
})

export const Resizable = withVariants(ResizablePrimitive, resizableVariants, [
  'align',
])
