'use client'

import React from 'react'

import { cn, withRef } from '@udecode/cn'
import { useComposedRef } from '@udecode/plate-common/react'
import { useColorInput } from '@udecode/plate-font/react'

export const ColorInput = withRef<'input'>(
  ({ children, className, value = '#000000', ...props }, ref) => {
    const { childProps, inputRef } = useColorInput()

    return (
      <div className="pce-flex pce-flex-col pce-items-center">
        {React.Children.map(children, (child) => {
          if (!child) return child

          return React.cloneElement(child as React.ReactElement, childProps)
        })}

        <input
          className={cn(
            'pce-size-0 pce-overflow-hidden pce-border-0 pce-p-0',
            className
          )}
          ref={useComposedRef(ref, inputRef)}
          type="color"
          value={value}
          {...props}
        />
      </div>
    )
  }
)
