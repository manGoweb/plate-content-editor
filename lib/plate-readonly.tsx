'use client'

import './styles/globals.css'

import { Editor } from './components/plate-ui/editor'
import { Plate } from '@udecode/plate-common/react'

import type { PlateEditorProps } from './plate'
import { createEditor } from './editor'

const PlateEditorReadonly = (props: PlateEditorProps) => {
  const { value, className, children } = props

  return (
    <Plate {...props} editor={createEditor(value)} readOnly>
      <Editor className={className} readOnly />
      {children}
    </Plate>
  )
}

export default PlateEditorReadonly
