'use client'

import './styles/globals.css'

import { Editor } from './components/plate-ui/editor'
import { createPlateEditor, Plate } from '@udecode/plate-common/react'

import type { PlateEditorProps } from './plate'
import { plugins } from './plugins'

const PlateEditorReadonly = (props: PlateEditorProps) => {
  const { value, className, children } = props

  const editor = createPlateEditor({
    value,
    ...plugins,
  })

  return (
    <Plate {...props} editor={editor} readOnly>
      <Editor className={className} readOnly />
      {children}
    </Plate>
  )
}

export default PlateEditorReadonly
