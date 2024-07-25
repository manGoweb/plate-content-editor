'use client'

import './styles/globals.css'

import { Editor } from './components/plate-ui/editor'
import { Plate } from '@udecode/plate-common'

import { defaultPlugins } from './plugins'
import type { PlateEditorProps } from './plate'

const PlateEditorReadonly = (props: PlateEditorProps) => {
  const { plugins, className, children } = props

  return (
    <Plate plugins={plugins ?? defaultPlugins} {...props} readOnly>
      <Editor className={className} />
      {children}
    </Plate>
  )
}

export default PlateEditorReadonly
