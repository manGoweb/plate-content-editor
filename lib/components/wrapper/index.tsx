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
        'relative w-full scroll-m-20',
        className,
        fullScreen &&
          'fixed inset-0 z-50 max-w-none [&_[data-slate-editor]]:max-h-[calc(100dvh-44px)]'
        // fullScreen &&
        //   '[&_[data-slate-editor]]:mx-auto [&_[data-slate-editor]]:max-w-[1125px]'
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
              'relative rounded-lg border bg-background',
              !fullScreen && 'md:hidden',
              'border-border'
            )}
          >
            <div className="chunk-mode relative z-20 w-full bg-background">
              {children}
            </div>
          </div>

          <div className="relative after:absolute after:inset-0 after:right-3 after:z-0 after:rounded-lg after:bg-muted max-md:hidden">
            <ResizablePanelGroup
              className="relative z-10"
              direction="horizontal"
            >
              <ResizablePanel
                className={cn(
                  'relative rounded-lg border bg-background',
                  'border-border'
                )}
                defaultSize={100}
                minSize={30}
                ref={ref}
              >
                <div className="chunk-mode relative z-20 w-full bg-background">
                  {children}
                </div>
              </ResizablePanel>

              <ResizableHandle
                className={cn(
                  'relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-x-px after:-translate-y-1/2 after:rounded-full after:bg-border after:transition-all after:hover:h-10 sm:block'
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
