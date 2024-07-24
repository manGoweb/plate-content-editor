'use client'

import { cn } from '@udecode/cn'

import './styles/globals.css'

export const initialValue = [
  {
    id: '1',
    type: 'p',
    children: [{ text: 'Hello, World!' }],
  },
]

import type {
  ComponentProps,
  CSSProperties,
  PropsWithChildren,
  ReactNode,
} from 'react'

import {
  type ContemberContextType,
  ContemberProvider,
} from './contember/contember-context'

import { Editor } from './components/plate-ui/editor'
import { Plate } from '@udecode/plate-common'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { TooltipProvider } from './components/plate-ui/tooltip'

import { FixedToolbar } from './components/plate-ui/fixed-toolbar'
import { FixedToolbarButtons } from './components/plate-ui/fixed-toolbar-buttons'

import { FloatingToolbar } from './components/plate-ui/floating-toolbar'
import { FloatingToolbarButtons } from './components/plate-ui/floating-toolbar-buttons'

import { CommentsProvider } from '@udecode/plate-comments'
import { CommentsPopover } from './components/plate-ui/comments-popover'

import { plugins } from './plugins'
import { Wrapper } from './components/wrapper'

export type PlateEditorProps = PropsWithChildren<
  Omit<ComponentProps<typeof Plate>, 'children'>
>

type Props = PlateEditorProps &
  ContemberContextType & {
    additionalToolbarButtons?: ReactNode
  }

export type PlateEditorValue = PlateEditorProps['value']

const PlateEditor = (props: Props) => {
  return (
    <ContemberProvider isContember={props.isContember}>
      <DndProvider backend={HTML5Backend}>
        <TooltipProvider>
          <CommentsProvider users={{}} myUserId="1">
            <Wrapper className="mt-20">
              <Plate plugins={props.plugins ?? plugins} {...props}>
                <>
                  <FixedToolbar className="no-scrollbar">
                    <FixedToolbarButtons>
                      {props.additionalToolbarButtons}
                    </FixedToolbarButtons>
                  </FixedToolbar>
                  <div
                    className="flex w-full"
                    style={
                      {
                        '--editor-px': 'max(5%,24px)',
                      } as CSSProperties
                    }
                  >
                    <div
                      className={cn(
                        'relative flex w-full overflow-x-auto',
                        '[&_.slate-start-area-top]:!h-4',
                        '[&_.slate-start-area-left]:!w-[var(--editor-px)] [&_.slate-start-area-right]:!w-[var(--editor-px)]'
                      )}
                    >
                      <Editor className="min-h-80" />

                      <FloatingToolbar>
                        <FloatingToolbarButtons />
                      </FloatingToolbar>
                    </div>
                  </div>
                </>

                <CommentsPopover />

                {props.children}
              </Plate>
            </Wrapper>
          </CommentsProvider>
        </TooltipProvider>
      </DndProvider>
    </ContemberProvider>
  )
}

export default PlateEditor
