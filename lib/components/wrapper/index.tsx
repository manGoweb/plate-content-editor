import { type ComponentProps, useState } from 'react'
import * as React from 'react'

import type { ImperativePanelHandle } from 'react-resizable-panels'

import { cn } from '@udecode/cn'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from './resizable'
import { WrapperToolbar } from './toolbar'

export function Wrapper({
  children,
  className,
  ...props
}: ComponentProps<'div'>) {
  const ref = React.useRef<ImperativePanelHandle>(null)
  const [fullScreen, setFullScreen] = useState(false)

  return (
    <div
      className={cn(
        'pce-relative pce-w-full pce-scroll-m-20',
        className,
        fullScreen &&
          'pce-fixed pce-inset-0 pce-z-50 pce-max-w-none [&_[data-slate-editor]]:pce-max-h-[calc(100dvh-44px)]'
        // fullScreen &&
        //   '[&_[data-slate-editor]]:pce-mx-auto [&_[data-slate-editor]]:max-w-[1125px]'
      )}
      {...props}
    >
      <WrapperToolbar
        fullScreen={fullScreen}
        resizablePanelRef={ref}
        setFullScreen={setFullScreen}
      />

      {fullScreen && children}

      {!fullScreen && (
        <>
          <div
            className={cn(
              'pce-relative pce-rounded-lg pce-border bg-background',
              !fullScreen && 'md:pce-hidden',
              'pce-border-border'
            )}
          >
            <div className="chunk-mode pce-relative pce-z-20 pce-w-full bg-background">
              {children}
            </div>
          </div>

          <div className="pce-relative after:pce-absolute after:pce-inset-0 after:pce-right-3 after:pce-z-0 after:pce-rounded-lg after:bg-muted max-md:pce-hidden">
            <ResizablePanelGroup
              className="pce-relative pce-z-10"
              direction="horizontal"
            >
              <ResizablePanel
                className={cn(
                  'pce-relative pce-rounded-lg pce-border bg-background',
                  'pce-border-border'
                )}
                defaultSize={100}
                minSize={30}
                ref={ref}
              >
                <div className="chunk-mode pce-relative pce-z-20 pce-w-full bg-background">
                  {children}
                </div>
              </ResizablePanel>

              <ResizableHandle
                className={cn(
                  'pce-relative pce-hidden pce-w-3 pce-bg-transparent pce-p-0 after:pce-absolute after:pce-right-0 after:pce-top-1/2 after:pce-h-8 after:pce-w-[6px] after:pce-translate-x-px after:pce-translate-y-1/2 after:pce-rounded-full after:bg-border after:pce-transition-all after:hover:pce-h-10 sm:pce-block'
                )}
              />
              <ResizablePanel defaultSize={0} minSize={0} />
            </ResizablePanelGroup>
          </div>
        </>
      )}
    </div>
  )
}
