'use client'

import './styles/globals.css'

import { Editor } from './components/plate-ui/editor'
import { Plate } from '@udecode/plate-common'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { TooltipProvider } from './components/plate-ui/tooltip'

import { plugins } from './plugins'
import type { PlateEditorProps } from './plate'

const PlateEditorReadonly = (props: PlateEditorProps) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <TooltipProvider>
        <Plate plugins={props.plugins ?? plugins} {...props} readOnly>
          <Editor />
          {props.children}
        </Plate>
      </TooltipProvider>
    </DndProvider>
  )
}

export default PlateEditorReadonly
