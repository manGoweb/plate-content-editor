'use client'

import { cn, withRef } from '@udecode/cn'
import {
  PortalBody,
  useComposedRef,
  useEditorId,
  useEventEditorSelectors,
} from '@udecode/plate-common/react'
import {
  type FloatingToolbarState,
  flip,
  offset,
  useFloatingToolbar,
  useFloatingToolbarState,
} from '@udecode/plate-floating'

import { Toolbar } from './toolbar'

export const FloatingToolbar = withRef<
  typeof Toolbar,
  {
    state?: FloatingToolbarState
  }
>(({ children, state, ...props }, componentRef) => {
  const editorId = useEditorId()
  const focusedEditorId = useEventEditorSelectors.focus()

  const floatingToolbarState = useFloatingToolbarState({
    editorId,
    focusedEditorId,
    ...state,
    floatingOptions: {
      middleware: [
        offset(12),
        flip({
          fallbackPlacements: [
            'top-start',
            'top-end',
            'bottom-start',
            'bottom-end',
          ],
          padding: 12,
        }),
      ],
      placement: 'top',
      ...state?.floatingOptions,
    },
  })

  const {
    hidden,
    props: rootProps,
    ref: floatingRef,
  } = useFloatingToolbar(floatingToolbarState)

  const ref = useComposedRef<HTMLDivElement>(componentRef, floatingRef)

  if (hidden) return null

  return (
    <PortalBody>
      <Toolbar
        className={cn(
          'pce-absolute pce-z-50 pce-whitespace-nowrap pce-border pce-border-slate-200 pce-bg-white pce-px-1 pce-opacity-100 pce-shadow-md print:pce-hidden dark:pce-border-slate-800 dark:pce-bg-slate-950'
        )}
        ref={ref}
        {...rootProps}
        {...props}
      >
        {children}
      </Toolbar>
    </PortalBody>
  )
})
