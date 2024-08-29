import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu'

import { MARK_SUBSCRIPT, MARK_SUPERSCRIPT } from '@udecode/plate-basic-marks'
import { focusEditor, toggleMark, useEditorRef } from '@udecode/plate-common'

import { Icons } from '@/components/icons'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  useOpenState,
} from './dropdown-menu'
import { ToolbarButton } from './toolbar'

export function MoreDropdownMenu(props: DropdownMenuProps) {
  const editor = useEditorRef()
  const openState = useOpenState()

  return (
    <DropdownMenu modal={false} {...openState} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton pressed={openState.open} tooltip="Insert">
          <Icons.more />
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="pce-flex pce-max-h-[500px] pce-min-w-[180px] pce-flex-col pce-gap-0.5 pce-overflow-y-auto"
      >
        <DropdownMenuItem
          onSelect={() => {
            toggleMark(editor, {
              clear: [MARK_SUBSCRIPT, MARK_SUPERSCRIPT],
              key: MARK_SUPERSCRIPT,
            })
            focusEditor(editor)
          }}
        >
          <Icons.superscript className="pce-mr-2 pce-size-5" />
          Superscript
          {/* (⌘+,) */}
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => {
            toggleMark(editor, {
              clear: [MARK_SUPERSCRIPT, MARK_SUBSCRIPT],
              key: MARK_SUBSCRIPT,
            })
            focusEditor(editor)
          }}
        >
          <Icons.subscript className="pce-mr-2 pce-size-5" />
          Subscript
          {/* (⌘+.) */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
