'use client'

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

import { defaultPlugins } from './plugins'
import { Wrapper } from './components/wrapper'
import { cn } from '@udecode/cn'

export type PlateEditorProps = PropsWithChildren<
  Omit<ComponentProps<typeof Plate>, 'children'>
> & {
  className?: string
}

export type Props = PlateEditorProps &
  ContemberContextType & {
    additionalToolbarButtons?: ReactNode
  } & {
    wrapperClassName?: string
  }

export type PlateEditorValue = PlateEditorProps['value']

export { defaultPlugins }

const PlateEditor = (props: Props) => {
  const {
    isContember,
    wrapperClassName,
    plugins,
    additionalToolbarButtons,
    className,
    children,
  } = props

  return (
    <ContemberProvider isContember={isContember}>
      <DndProvider backend={HTML5Backend}>
        <TooltipProvider>
          <Wrapper className={cn('mt-20', wrapperClassName)}>
            <Plate plugins={plugins ?? defaultPlugins} {...props}>
              <>
                <FixedToolbar className="no-scrollbar">
                  <FixedToolbarButtons>
                    {additionalToolbarButtons}
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
                  <Editor className={cn('min-h-80', className)} />

                  <FloatingToolbar>
                    <FloatingToolbarButtons />
                  </FloatingToolbar>
                </div>
              </>

              {children}
            </Plate>
          </Wrapper>
        </TooltipProvider>
      </DndProvider>
    </ContemberProvider>
  )
}

export default PlateEditor
