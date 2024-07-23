import { forwardRef, useRef, type ChangeEvent } from 'react'
import {
  insertImage,
  type ELEMENT_IMAGE,
  type ELEMENT_MEDIA_EMBED,
} from '@udecode/plate-media'
import { useEditorRef } from '@udecode/plate-common'
import { useS3Client } from '@contember/react-uploader'
import { ToolbarButton } from '@/components/plate-ui/toolbar'
import { Icons } from '@/components/icons'

interface ContemberImageToolBarButtonProps {
  nodeType?: typeof ELEMENT_IMAGE | typeof ELEMENT_MEDIA_EMBED
}

export const ContemberImageToolBarButton: React.FC<
  React.PropsWithChildren<ContemberImageToolBarButtonProps>
> = forwardRef((props, ref) => {
  const { nodeType, ...rest } = props
  const editor = useEditorRef()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const s3Client = useS3Client()
  const controller = new AbortController()

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null
    if (!file) return

    const uploaded = await s3Client.upload({
      file,
      signal: controller.signal,
      onProgress: (progress) => {
        console.log(progress)
      },
      fileName: file.name,
      size: file.size,
      extension: file.type,
    })

    if (!uploaded.publicUrl) return

    insertImage(editor, uploaded.publicUrl, {
      nextBlock: false,
    })
  }

  return (
    <div>
      <ToolbarButton
        ref={ref as any}
        onClick={() => fileInputRef.current?.click()}
        {...rest}
      >
        <Icons.imageUpload />
      </ToolbarButton>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleFileUpload}
      />
    </div>
  )
})
