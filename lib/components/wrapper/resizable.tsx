'use client'

import * as ResizablePrimitive from 'react-resizable-panels'

import { cn } from '@udecode/cn'
import { GripVertical } from 'lucide-react'

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      'pce-flex pce-size-full data-[panel-group-direction=vertical]:pce-flex-col',
      className
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  className,
  withHandle,
  ...props
}: {
  withHandle?: boolean
} & React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle>) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      'pce-relative pce-flex pce-w-px pce-items-center pce-justify-center bg-border after:pce-absolute after:pce-inset-y-0 after:pce-left-1/2 after:pce-w-1 after:pce-translate-x-1/2 focus-visible:pce-outline-none focus-visible:pce-ring-1 focus-visible:ring-ring focus-visible:pce-ring-offset-1 data-[panel-group-direction=vertical]:pce-h-px data-[panel-group-direction=vertical]:pce-w-full data-[panel-group-direction=vertical]:after:pce-left-0 data-[panel-group-direction=vertical]:after:pce-h-1 data-[panel-group-direction=vertical]:after:pce-w-full data-[panel-group-direction=vertical]:after:pce-translate-y-1/2 data-[panel-group-direction=vertical]:after:pce-translate-x-0 [&[data-panel-group-direction=vertical]>div]:pce-rotate-90',
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="pce-z-10 pce-flex pce-h-4 pce-w-3 pce-items-center pce-justify-center pce-rounded-sm pce-border bg-border">
        <GripVertical className="pce-size-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizableHandle, ResizablePanel, ResizablePanelGroup }
