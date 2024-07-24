'use client'

import type { ImperativePanelHandle } from 'react-resizable-panels'

import { cn } from '@udecode/cn'
import { Maximize, Monitor, Smartphone, Tablet } from 'lucide-react'

import { ToggleGroup, ToggleGroupItem } from './toggle-group'

export function WrapperToolbar({
  fullScreen,
  resizablePanelRef,
  setFullScreen,
}: {
  fullScreen: boolean
  resizablePanelRef: React.RefObject<ImperativePanelHandle>
  setFullScreen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-4 sm:flex-row',
        'absolute right-0 z-[60]',
        !fullScreen && '-top-4 -translate-y-full',
        fullScreen && 'bottom-4'
      )}
    >
      <div className="flex items-center gap-2 pr-[14px] sm:ml-auto">
        <div className="hidden h-[28px] items-center gap-1.5 rounded-md border bg-background p-[2px] shadow-sm md:flex">
          <ToggleGroup
            defaultValue="100"
            onValueChange={(value) => {
              if (value === 'full') {
                setFullScreen(true)

                return
              }
              if (fullScreen) {
                setFullScreen(false)
              }

              setTimeout(() => {
                if (resizablePanelRef.current) {
                  resizablePanelRef.current.resize(Number.parseInt(value))
                }
              }, 0)
            }}
            type="single"
          >
            <ToggleGroupItem
              className="size-[22px] rounded-sm p-0"
              value="full"
            >
              <Maximize className="!size-3.5" />
            </ToggleGroupItem>
            <ToggleGroupItem className="size-[22px] rounded-sm p-0" value="100">
              <Monitor className="!size-3.5" />
            </ToggleGroupItem>
            <ToggleGroupItem className="size-[22px] rounded-sm p-0" value="60">
              <Tablet className="!size-3.5" />
            </ToggleGroupItem>
            <ToggleGroupItem className="size-[22px] rounded-sm p-0" value="30">
              <Smartphone className="!size-3.5" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  )
}
