'use client'

import './styles/globals.css'

import PlateEditor, { type Props } from './plate'

import {
  Component,
  Field,
  type SugarableRelativeSingleField,
  useField,
} from '@contember/interface'
import { useEditorRef } from '@udecode/plate-common/react'
import { useEffect } from 'react'

import { isJsonContent, isJsonObject } from './contember/utils'
import { ContemberImageToolBarButton } from './contember/contember-image-toolbar-button'
import { replaceNodeChildren } from '@udecode/plate-common'

export type PlateEditorForContemberProps = {
  field: string | SugarableRelativeSingleField
}

const PlateEditorForContember = Component<Props & PlateEditorForContemberProps>(
  (props) => {
    const { field } = props

    const contentField = useField(field)

    const handleEditorOnChange = (value: any) => {
      const contentJson = isJsonObject(value) ? { children: value } : null

      if (
        contentJson &&
        contentField.value &&
        isJsonContent(contentField.value) &&
        contentField.value.children === value
      ) {
        return
      }

      contentField.updateValue(contentJson)
    }

    return (
      <PlateEditor
        isContember={true}
        onChange={handleEditorOnChange}
        additionalToolbarButtons={
          <>
            <ContemberImageToolBarButton />
          </>
        }
        {...props}
        value={
          isJsonContent(contentField?.value)
            ? contentField?.value?.children
            : undefined
        }
      >
        <PlateContentSync field={field} />
      </PlateEditor>
    )
  },
  ({ field }) => (
    <>
      <Field field={field} />
    </>
  ),
  'PlateEditorForContember'
)

type PlateContentSyncProps = {
  field: string | SugarableRelativeSingleField
}

const PlateContentSync = ({ field }: PlateContentSyncProps) => {
  const PlateContentSyncOnMount = useField(field)
  const fieldAccessor = PlateContentSyncOnMount.getAccessor
  const fieldValue = PlateContentSyncOnMount.value
  const editor = useEditorRef()

  useEffect(() => {
    if (fieldValue !== fieldAccessor().value) {
      return
    }
    const currValue = fieldAccessor().value
    if (currValue === editor.children) {
      return
    }

    replaceNodeChildren(editor, {
      at: [],
      nodes: currValue,
    } as any)
  }, [])

  return null
}

export default PlateEditorForContember
