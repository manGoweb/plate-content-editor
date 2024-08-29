import type React from 'react'
import { useEffect } from 'react'

import {
  type WithRequiredKey,
  isSelectionExpanded,
} from '@udecode/plate-common'
import {
  useEditorSelector,
  useElement,
  useRemoveNodeButton,
} from '@udecode/plate-common/react'
import {
  FloatingMedia as FloatingMediaPrimitive,
  floatingMediaActions,
  useFloatingMediaSelectors,
} from '@udecode/plate-media/react'
import { useReadOnly, useSelected } from 'slate-react'

import { Icons } from '@/components/icons'

import { Button, buttonVariants } from './button'
// import { CaptionButton } from './caption'
import { inputVariants } from './input'
import { Popover, PopoverAnchor, PopoverContent } from './popover'
import { Separator } from './separator'

export interface MediaPopoverProps {
  children: React.ReactNode
  plugin: WithRequiredKey
}

export function MediaPopover({ children, plugin }: MediaPopoverProps) {
  const readOnly = useReadOnly()
  const selected = useSelected()

  const selectionCollapsed = useEditorSelector(
    (editor) => !isSelectionExpanded(editor),
    []
  )
  const isOpen = !readOnly && selected && selectionCollapsed
  const isEditing = useFloatingMediaSelectors().isEditing()

  useEffect(() => {
    if (!isOpen && isEditing) {
      floatingMediaActions.isEditing(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const element = useElement()
  const { props: buttonProps } = useRemoveNodeButton({ element })

  if (readOnly) return <>{children}</>

  return (
    <Popover modal={false} open={isOpen}>
      <PopoverAnchor>{children}</PopoverAnchor>

      <PopoverContent
        className="pce-w-auto pce-p-1"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        {isEditing ? (
          <div className="pce-flex pce-w-[330px] pce-flex-col">
            <div className="pce-flex pce-items-center">
              <div className="pce-flex pce-items-center pce-pl-3 pce-text-slate-500 dark:pce-text-slate-400">
                <Icons.link className="pce-size-4" />
              </div>

              <FloatingMediaPrimitive.UrlInput
                className={inputVariants({ h: 'sm', variant: 'ghost' })}
                options={{ plugin }}
                placeholder="Paste the embed link..."
              />
            </div>
          </div>
        ) : (
          <div className="pce-box-content pce-flex pce-h-9 pce-items-center pce-gap-1">
            <FloatingMediaPrimitive.EditButton
              className={buttonVariants({ size: 'sm', variant: 'ghost' })}
            >
              Edit link
            </FloatingMediaPrimitive.EditButton>

            {/* <CaptionButton variant="ghost">Caption</CaptionButton> */}

            <Separator className="pce-my-1" orientation="vertical" />

            <Button size="sms" variant="ghost" {...buttonProps}>
              <Icons.delete className="pce-size-4" />
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}
