import type { FC } from 'react'

import { ELEMENT_BLOCKQUOTE } from '@udecode/plate-block-quote'
import { ELEMENT_CODE_BLOCK } from '@udecode/plate-code-block'
import { createNodesWithHOC } from '@udecode/plate-common'
import {
  type WithDraggableOptions,
  withDraggable as withDraggablePrimitive,
} from '@udecode/plate-dnd'
import {
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
} from '@udecode/plate-heading'
import { ELEMENT_COLUMN_GROUP } from '@udecode/plate-layout'
import { ELEMENT_OL, ELEMENT_UL } from '@udecode/plate-list'
import {
  ELEMENT_IMAGE,
  ELEMENT_MEDIA_EMBED,
  ELEMENT_PLACEHOLDER,
} from '@udecode/plate-media'
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph'
import { ELEMENT_TABLE } from '@udecode/plate-table'
import { ELEMENT_TOGGLE } from '@udecode/plate-toggle'

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
      keys: [ELEMENT_PARAGRAPH, ELEMENT_UL, ELEMENT_OL],
      level: 0,
    },
    {
      draggableProps: {
        classNames: {
          blockToolbarWrapper: 'pce-h-[1.3em]',
          gutterLeft: 'pce-px-0 pce-pb-1 pce-text-[1.875em]',
        },
      },
      key: ELEMENT_H1,
    },
    {
      draggableProps: {
        classNames: {
          blockToolbarWrapper: 'pce-h-[1.3em]',
          gutterLeft: 'pce-px-0 pce-pb-1 pce-text-[1.5em]',
        },
      },
      key: ELEMENT_H2,
    },
    {
      draggableProps: {
        classNames: {
          blockToolbarWrapper: 'pce-h-[1.3em]',
          gutterLeft: 'pce-pt-[2px] pce-px-0 pce-pb-1 pce-text-[1.25em]',
        },
      },
      key: ELEMENT_H3,
    },
    {
      draggableProps: {
        classNames: {
          blockToolbarWrapper: 'pce-h-[1.3em]',
          gutterLeft: 'pce-pt-[3px] pce-px-0 pce-pb-0 pce-text-[1.1em]',
        },
      },
      keys: [ELEMENT_H4, ELEMENT_H5],
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pce-pt-[3px] pce-px-0 pce-pb-0',
        },
      },
      keys: [ELEMENT_PARAGRAPH],
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pce-px-0 pce-pb-0',
        },
      },
      keys: [ELEMENT_H6, ELEMENT_UL, ELEMENT_OL],
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pce-px-0 pce-pb-0',
        },
      },
      key: ELEMENT_BLOCKQUOTE,
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pce-pt-6 pce-px-0 pce-pb-0',
        },
      },
      key: ELEMENT_CODE_BLOCK,
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pce-pt-0 pce-px-0 pce-pb-0',
        },
      },
      key: ELEMENT_IMAGE,
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pce-pt-0 pce-px-0 pce-pb-0',
        },
      },
      key: ELEMENT_MEDIA_EMBED,
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pce-pt-0 pce-px-0 pce-pb-0',
        },
      },
      key: ELEMENT_TOGGLE,
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pce-pt-0 pce-px-0 pce-pb-0',
        },
      },
      key: ELEMENT_COLUMN_GROUP,
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pce-pt-3 pce-px-0 pce-pb-0',
        },
      },
      key: ELEMENT_PLACEHOLDER,
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pce-pt-3 pce-px-0 pce-pb-0',
        },
      },
      key: ELEMENT_TABLE,
    },
  ])
}
