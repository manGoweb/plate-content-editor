import React from 'react'

import { cn } from '@udecode/cn'
import {
  type PlaceholderProps,
  createNodeHOC,
  createNodesHOC,
  usePlaceholderState,
} from '@udecode/plate-common'
import { ELEMENT_H1 } from '@udecode/plate-heading'
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph'

export const Placeholder = (props: PlaceholderProps) => {
  const { children, nodeProps, placeholder } = props

  const { enabled } = usePlaceholderState(props)

  return React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      className: child.props.className,
      nodeProps: {
        ...nodeProps,
        className: cn(
          enabled &&
            'before:pce-absolute before:pce-cursor-text before:pce-opacity-30 before:pce-content-[attr(placeholder)]'
        ),
        placeholder,
      },
    })
  })
}

export const withPlaceholder = createNodeHOC(Placeholder)

export const withPlaceholdersPrimitive = createNodesHOC(Placeholder)

export const withPlaceholders = (components: any) =>
  withPlaceholdersPrimitive(components, [
    {
      hideOnBlur: true,
      key: ELEMENT_PARAGRAPH,
      placeholder: 'Type a paragraph',
      query: {
        maxLevel: 1,
      },
    },
    {
      hideOnBlur: false,
      key: ELEMENT_H1,
      placeholder: 'Untitled',
    },
  ])
