'use client'

import './styles/globals.css'

import { Editor } from './components/plate-ui/editor'
import { Plate } from '@udecode/plate-common'

import { plugins } from './plugins'
import type { PlateEditorProps } from './plate'

const PlateEditorReadonly = (props: PlateEditorProps) => {
  return (
    <Plate plugins={props.plugins ?? plugins} {...props} readOnly>
      <Editor />
      {props.children}
    </Plate>
  )
}

export default PlateEditorReadonly
