'use client'

import { cn } from '@udecode/cn'
import { useFormInputProps } from '@udecode/plate-common'
import {
  type UseVirtualFloatingOptions,
  flip,
  offset,
} from '@udecode/plate-floating'
import {
  FloatingLinkUrlInput,
  type LinkFloatingToolbarState,
  LinkOpenButton,
  useFloatingLinkEdit,
  useFloatingLinkEditState,
  useFloatingLinkInsert,
  useFloatingLinkInsertState,
} from '@udecode/plate-link'

import { Icons } from '@/components/icons'

import { buttonVariants } from './button'
import { inputVariants } from './input'
import { popoverVariants } from './popover'
import { Separator } from './separator'

const floatingOptions: UseVirtualFloatingOptions = {
  middleware: [
    offset(12),
    flip({
      fallbackPlacements: ['bottom-end', 'top-start', 'top-end'],
      padding: 12,
    }),
  ],
  placement: 'bottom-start',
}

export interface LinkFloatingToolbarProps {
  state?: LinkFloatingToolbarState
}

export function LinkFloatingToolbar({ state }: LinkFloatingToolbarProps) {
  const insertState = useFloatingLinkInsertState({
    ...state,
    floatingOptions: {
      ...floatingOptions,
      ...state?.floatingOptions,
    },
  })
  const {
    hidden,
    props: insertProps,
    ref: insertRef,
    textInputProps,
  } = useFloatingLinkInsert(insertState)

  const editState = useFloatingLinkEditState({
    ...state,
    floatingOptions: {
      ...floatingOptions,
      ...state?.floatingOptions,
    },
  })
  const {
    editButtonProps,
    props: editProps,
    ref: editRef,
    unlinkButtonProps,
  } = useFloatingLinkEdit(editState)
  const inputProps = useFormInputProps({
    preventDefaultOnEnterKeydown: true,
  })

  if (hidden) return null

  const input = (
    <div className="pce-flex pce-w-[330px] pce-flex-col" {...inputProps}>
      <div className="pce-flex pce-items-center">
        <div className="pce-flex pce-items-center pce-pl-3 pce-text-slate-500 dark:pce-text-slate-400">
          <Icons.link className="pce-size-4" />
        </div>

        <FloatingLinkUrlInput
          className={inputVariants({ h: 'sm', variant: 'ghost' })}
          placeholder="Paste link"
        />
      </div>
      <Separator />
      <div className="pce-flex pce-items-center">
        <div className="pce-flex pce-items-center pce-pl-3 pce-text-slate-500 dark:pce-text-slate-400">
          <Icons.text className="pce-size-4" />
        </div>
        <input
          className={inputVariants({ h: 'sm', variant: 'ghost' })}
          placeholder="Text to display"
          {...textInputProps}
        />
      </div>
    </div>
  )

  const editContent = editState.isEditing ? (
    input
  ) : (
    <div className="pce-box-content pce-flex pce-h-9 pce-items-center pce-gap-1">
      <button
        className={buttonVariants({ size: 'sm', variant: 'ghost' })}
        type="button"
        {...editButtonProps}
      >
        Edit link
      </button>

      <Separator orientation="vertical" />

      <LinkOpenButton
        className={buttonVariants({
          size: 'sms',
          variant: 'ghost',
        })}
      >
        <Icons.externalLink width={18} />
      </LinkOpenButton>

      <Separator orientation="vertical" />

      <button
        className={buttonVariants({
          size: 'sms',
          variant: 'ghost',
        })}
        type="button"
        {...unlinkButtonProps}
      >
        <Icons.unlink width={18} />
      </button>
    </div>
  )

  return (
    <>
      <div
        className={cn(popoverVariants(), 'pce-w-auto pce-p-1')}
        ref={insertRef}
        {...insertProps}
      >
        {input}
      </div>

      <div
        className={cn(popoverVariants(), 'pce-w-auto pce-p-1')}
        ref={editRef}
        {...editProps}
      >
        {editContent}
      </div>
    </>
  )
}
