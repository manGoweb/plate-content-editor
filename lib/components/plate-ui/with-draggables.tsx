import type { FC } from 'react'

import { BlockquotePlugin } from '@udecode/plate-block-quote/react'
import { CodeBlockPlugin } from '@udecode/plate-code-block/react'
import {
  ParagraphPlugin,
  createNodesWithHOC,
} from '@udecode/plate-common/react'
import {
  type WithDraggableOptions,
  withDraggable as withDraggablePrimitive,
} from '@udecode/plate-dnd'
import { HEADING_KEYS } from '@udecode/plate-heading'
import { ColumnPlugin } from '@udecode/plate-layout'
import {
  BulletedListPlugin,
  NumberedListPlugin,
} from '@udecode/plate-list/react'
import {
  ImagePlugin,
  MediaEmbedPlugin,
  PlaceholderPlugin,
} from '@udecode/plate-media'
import { TablePlugin } from '@udecode/plate-table'
import { TogglePlugin } from '@udecode/plate-toggle'

import { Draggable, type DraggableProps } from './draggable'

export const withDraggable = (
  Component: FC,
  options?: WithDraggableOptions<
    Partial<Omit<DraggableProps, 'children' | 'editor' | 'element'>>
  >
) =>
  withDraggablePrimitive<DraggableProps>(Draggable, Component, options as any)

export const withDraggablesPrimitive = createNodesWithHOC(withDraggable)

export const withDraggables = (components: any) => {
  return withDraggablesPrimitive(components, [
    {
      keys: [
        ParagraphPlugin.key,
        BulletedListPlugin.key,
        NumberedListPlugin.key,
      ],
      level: 0,
    },
    {
      draggableProps: {
        classNames: {
          blockToolbarWrapper: 'pce-h-[1.3em]',
          gutterLeft: 'pce-px-0 pce-pb-1 pce-text-[1.875em]',
        },
      },
      key: HEADING_KEYS.h1,
    },
    {
      draggableProps: {
        classNames: {
          blockToolbarWrapper: 'pce-h-[1.3em]',
          gutterLeft: 'pce-px-0 pce-pb-1 pce-text-[1.5em]',
        },
      },
      key: HEADING_KEYS.h2,
    },
    {
      draggableProps: {
        classNames: {
          blockToolbarWrapper: 'pce-h-[1.3em]',
          gutterLeft: 'pce-pt-[2px] pce-px-0 pce-pb-1 pce-text-[1.25em]',
        },
      },
      key: HEADING_KEYS.h3,
    },
    {
      draggableProps: {
        classNames: {
          blockToolbarWrapper: 'pce-h-[1.3em]',
          gutterLeft: 'pce-pt-[3px] pce-px-0 pce-pb-0 pce-text-[1.1em]',
        },
      },
      keys: [HEADING_KEYS.h4, HEADING_KEYS.h5],
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pce-pt-[3px] pce-px-0 pce-pb-0',
        },
      },
      keys: [ParagraphPlugin.key],
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pce-px-0 pce-pb-0',
        },
      },
      keys: [HEADING_KEYS.h6, BulletedListPlugin.key, NumberedListPlugin.key],
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pce-px-0 pce-pb-0',
        },
      },
      key: BlockquotePlugin.key,
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pce-pt-6 pce-px-0 pce-pb-0',
        },
      },
      key: CodeBlockPlugin.key,
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pce-pt-0 pce-px-0 pce-pb-0',
        },
      },
      key: ImagePlugin.key,
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pce-pt-0 pce-px-0 pce-pb-0',
        },
      },
      key: MediaEmbedPlugin.key,
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pce-pt-0 pce-px-0 pce-pb-0',
        },
      },
      key: TogglePlugin.key,
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pce-pt-0 pce-px-0 pce-pb-0',
        },
      },
      key: ColumnPlugin.key,
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pce-pt-3 pce-px-0 pce-pb-0',
        },
      },
      key: PlaceholderPlugin.key,
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pce-pt-3 pce-px-0 pce-pb-0',
        },
      },
      key: TablePlugin.key,
    },
  ])
}
