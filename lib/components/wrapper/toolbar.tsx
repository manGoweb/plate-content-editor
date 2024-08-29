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
        'pce-flex pce-flex-col pce-items-center pce-gap-4 sm:pce-flex-row',
        'pce-absolute pce-right-0 pce-z-[60]',
        !fullScreen && '-pce-top-4 -pce-translate-y-full',
        fullScreen && 'pce-bottom-4'
      )}
    >
      <div className="pce-flex pce-items-center pce-gap-2 pce-pr-[14px] sm:pce-ml-auto">
        <div className="pce-hidden pce-h-[28px] pce-items-center pce-gap-1.5 pce-rounded-md pce-border bg-background pce-p-[2px] pce-shadow-sm md:pce-flex">
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
              className="pce-size-[22px] pce-rounded-sm pce-p-0"
              value="full"
            >
              <Maximize className="!pce-size-3.5" />
            </ToggleGroupItem>
            <ToggleGroupItem
              className="pce-size-[22px] pce-rounded-sm pce-p-0"
              value="100"
            >
              <Monitor className="!pce-size-3.5" />
            </ToggleGroupItem>
            <ToggleGroupItem
              className="pce-size-[22px] pce-rounded-sm pce-p-0"
              value="60"
            >
              <Tablet className="!pce-size-3.5" />
            </ToggleGroupItem>
            <ToggleGroupItem
              className="pce-size-[22px] pce-rounded-sm pce-p-0"
              value="30"
            >
              <Smartphone className="!pce-size-3.5" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  )
}
