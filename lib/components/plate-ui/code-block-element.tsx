'use client'

import { cn, withRef } from '@udecode/cn'
import { useCodeBlockElementState } from '@udecode/plate-code-block'
import { PlateElement } from '@udecode/plate-common'

import { CodeBlockCombobox } from './code-block-combobox'

import './code-block-element.css'

export const CodeBlockElement = withRef<typeof PlateElement>(
  ({ children, className, ...props }, ref) => {
    const { element } = props
    const state = useCodeBlockElementState({ element })

    return (
      <PlateElement
        className={cn('pce-relative pce-py-1', state.className, className)}
        ref={ref}
        {...props}
      >
        <pre className="pce-overflow-x-auto pce-rounded-md pce-bg-slate-100 pce-px-6 pce-py-8 pce-font-mono pce-text-sm pce-leading-[normal] pce-[tab-size:2] dark:pce-bg-slate-800">
          <code>{children}</code>
        </pre>

        {state.syntax && (
          <div
            className="pce-absolute pce-right-2 pce-top-2 pce-z-10 pce-select-none"
            contentEditable={false}
          >
            <CodeBlockCombobox />
          </div>
        )}
      </PlateElement>
    )
  }
)
