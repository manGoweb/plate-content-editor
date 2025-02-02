import { useEditorReadOnly } from '@udecode/plate-common/react'
import { ListStyleType } from '@udecode/plate-indent-list'

import { Icons, iconVariants } from '@/components/icons'
import { AlignDropdownMenu } from '@/components/plate-ui/align-dropdown-menu'
import { ColorDropdownMenu } from '@/components/plate-ui/color-dropdown-menu'
import { EmojiDropdownMenu } from '@/components/plate-ui/emoji-dropdown-menu'
import { IndentListToolbarButton } from '@/components/plate-ui/indent-list-toolbar-button'
import { IndentToolbarButton } from '@/components/plate-ui/indent-toolbar-button'
import { LineHeightDropdownMenu } from '@/components/plate-ui/line-height-dropdown-menu'
import { LinkToolbarButton } from '@/components/plate-ui/link-toolbar-button'
import { MediaToolbarButton } from '@/components/plate-ui/media-toolbar-button'
import { MoreDropdownMenu } from '@/components/plate-ui/more-dropdown-menu'
import { OutdentToolbarButton } from '@/components/plate-ui/outdent-toolbar-button'
import { TableDropdownMenu } from '@/components/plate-ui/table-dropdown-menu'

import { InsertDropdownMenu } from './insert-dropdown-menu'
import { MarkToolbarButton } from './mark-toolbar-button'
import { ModeDropdownMenu } from './mode-dropdown-menu'
import { ToolbarGroup } from './toolbar'
import { TurnIntoDropdownMenu } from './turn-into-dropdown-menu'
import type { PropsWithChildren } from 'react'
import {
  BoldPlugin,
  CodePlugin,
  ItalicPlugin,
  StrikethroughPlugin,
  UnderlinePlugin,
} from '@udecode/plate-basic-marks/react'
import { ImagePlugin } from '@udecode/plate-media/react'
import { FontBackgroundColorPlugin, FontColorPlugin } from '@udecode/plate-font'

export function FixedToolbarButtons(props: PropsWithChildren) {
  const readOnly = useEditorReadOnly()

  return (
    <div className="pce-w-full pce-overflow-hidden">
      <div
        className="pce-flex pce-flex-wrap"
        style={{
          transform: 'translateX(calc(-1px))',
        }}
      >
        {!readOnly && (
          <>
            <ToolbarGroup noSeparator>
              <InsertDropdownMenu />
              <TurnIntoDropdownMenu />
            </ToolbarGroup>

            <ToolbarGroup>
              <MarkToolbarButton tooltip="Bold (⌘+B)" nodeType={BoldPlugin.key}>
                <Icons.bold />
              </MarkToolbarButton>
              <MarkToolbarButton
                tooltip="Italic (⌘+I)"
                nodeType={ItalicPlugin.key}
              >
                <Icons.italic />
              </MarkToolbarButton>
              <MarkToolbarButton
                tooltip="Underline (⌘+U)"
                nodeType={UnderlinePlugin.key}
              >
                <Icons.underline />
              </MarkToolbarButton>

              <MarkToolbarButton
                tooltip="Strikethrough (⌘+⇧+M)"
                nodeType={StrikethroughPlugin.key}
              >
                <Icons.strikethrough />
              </MarkToolbarButton>
              <MarkToolbarButton tooltip="Code (⌘+E)" nodeType={CodePlugin.key}>
                <Icons.code />
              </MarkToolbarButton>
            </ToolbarGroup>

            <ToolbarGroup>
              <ColorDropdownMenu
                nodeType={FontColorPlugin.key}
                tooltip="Text Color"
              >
                <Icons.color className={iconVariants({ variant: 'toolbar' })} />
              </ColorDropdownMenu>
              <ColorDropdownMenu
                nodeType={FontBackgroundColorPlugin.key}
                tooltip="Highlight Color"
              >
                <Icons.bg className={iconVariants({ variant: 'toolbar' })} />
              </ColorDropdownMenu>
            </ToolbarGroup>

            <ToolbarGroup>
              <AlignDropdownMenu />

              <LineHeightDropdownMenu />

              <IndentListToolbarButton nodeType={ListStyleType.Disc} />
              <IndentListToolbarButton nodeType={ListStyleType.Decimal} />

              <OutdentToolbarButton />
              <IndentToolbarButton />
            </ToolbarGroup>

            <ToolbarGroup>
              <LinkToolbarButton />

              <MediaToolbarButton nodeType={ImagePlugin.key} />

              <TableDropdownMenu />

              <EmojiDropdownMenu />

              {props.children}

              <MoreDropdownMenu />
            </ToolbarGroup>
          </>
        )}

        <div className="pce-grow" />

        <ToolbarGroup noSeparator>
          <ModeDropdownMenu />
        </ToolbarGroup>
      </div>
    </div>
  )
}
