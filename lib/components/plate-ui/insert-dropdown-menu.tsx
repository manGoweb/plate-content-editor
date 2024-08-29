import React from 'react'

import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu'

import { BlockquotePlugin } from '@udecode/plate-block-quote/react'
import { ParagraphPlugin, insertEmptyElement } from '@udecode/plate-common'
import { focusEditor, useEditorRef } from '@udecode/plate-common/react'
import { HEADING_KEYS } from '@udecode/plate-heading'

import { Icons } from '@/components/icons'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  useOpenState,
} from './dropdown-menu'
import { ToolbarButton } from './toolbar'
import { HorizontalRulePlugin } from '@udecode/plate-horizontal-rule/react'
import { TablePlugin } from '@udecode/plate-table'
import { CodeBlockPlugin } from '@udecode/plate-code-block/react'
import { LinkPlugin } from '@udecode/plate-link'
import {
  ImagePlugin,
  insertMedia,
  MediaEmbedPlugin,
} from '@udecode/plate-media'
import { toggleIndentList } from '@udecode/plate-indent-list'
import { insertTable } from '@udecode/plate-table/react'
import { triggerFloatingLink } from '@udecode/plate-link/react'

const items = [
  {
    items: [
      {
        description: 'Paragraph',
        icon: Icons.paragraph,
        label: 'Paragraph',
        value: ParagraphPlugin.key,
      },
      {
        description: 'Heading 1',
        icon: Icons.h1,
        label: 'Heading 1',
        value: HEADING_KEYS.h1,
      },
      {
        description: 'Heading 2',
        icon: Icons.h2,
        label: 'Heading 2',
        value: HEADING_KEYS.h2,
      },
      {
        description: 'Heading 3',
        icon: Icons.h3,
        label: 'Heading 3',
        value: HEADING_KEYS.h3,
      },
      {
        description: 'Quote (⌘+⇧+.)',
        icon: Icons.blockquote,
        label: 'Quote',
        value: BlockquotePlugin.key,
      },
      {
        value: TablePlugin.key,
        label: 'Table',
        description: 'Table',
        icon: Icons.table,
      },
      {
        value: 'ul',
        label: 'Bulleted list',
        description: 'Bulleted list',
        icon: Icons.ul,
      },
      {
        value: 'ol',
        label: 'Numbered list',
        description: 'Numbered list',
        icon: Icons.ol,
      },
      {
        value: HorizontalRulePlugin.key,
        label: 'Divider',
        description: 'Divider (---)',
        icon: Icons.hr,
      },
    ],
    label: 'Basic blocks',
  },
  {
    label: 'Media',
    items: [
      {
        value: CodeBlockPlugin.key,
        label: 'Code',
        description: 'Code (```)',
        icon: Icons.codeblock,
      },
      {
        value: ImagePlugin.key,
        label: 'Image',
        description: 'Image',
        icon: Icons.image,
      },
      {
        value: MediaEmbedPlugin.key,
        label: 'Embed',
        description: 'Embed',
        icon: Icons.media,
      },
    ],
  },
  {
    label: 'Inline',
    items: [
      {
        value: LinkPlugin.key,
        label: 'Link',
        description: 'Link',
        icon: Icons.link,
      },
    ],
  },
]

export function InsertDropdownMenu(props: DropdownMenuProps) {
  const editor = useEditorRef()
  const openState = useOpenState()

  return (
    <DropdownMenu modal={false} {...openState} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton isDropdown pressed={openState.open} tooltip="Insert">
          <Icons.add />
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="pce-flex pce-max-h-[500px] pce-min-w-0 pce-flex-col pce-gap-0.5 pce-overflow-y-auto"
      >
        {items.map(({ items: nestedItems, label }, index) => (
          <React.Fragment key={label}>
            {index !== 0 && <DropdownMenuSeparator />}

            <DropdownMenuLabel>{label}</DropdownMenuLabel>
            {nestedItems.map(
              ({ icon: Icon, label: itemLabel, value: type }) => (
                <DropdownMenuItem
                  className="pce-min-w-[180px]"
                  key={type}
                  onSelect={async () => {
                    switch (type) {
                      case ImagePlugin.key: {
                        await insertMedia(editor, { type: ImagePlugin.key })

                        break
                      }
                      case MediaEmbedPlugin.key: {
                        await insertMedia(editor, {
                          type: MediaEmbedPlugin.key,
                        })

                        break
                      }
                      case 'ul':
                      case 'ol': {
                        insertEmptyElement(editor, ParagraphPlugin.key, {
                          select: true,
                          nextBlock: true,
                        })

                        toggleIndentList(editor, {
                          listStyleType: type === 'ul' ? 'disc' : 'decimal',
                        })

                        break
                      }
                      case TablePlugin.key: {
                        insertTable(editor)

                        break
                      }
                      case LinkPlugin.key: {
                        triggerFloatingLink(editor, { focused: true })

                        break
                      }
                      default: {
                        insertEmptyElement(editor, type, {
                          nextBlock: true,
                          select: true,
                        })
                      }
                    }

                    focusEditor(editor)
                  }}
                >
                  <Icon className="pce-mr-2 pce-size-5" />
                  {itemLabel}
                </DropdownMenuItem>
              )
            )}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
