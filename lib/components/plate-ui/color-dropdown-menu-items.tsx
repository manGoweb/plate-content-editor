'use client'

import type React from 'react'

import type { DropdownMenuItemProps } from '@radix-ui/react-dropdown-menu'

import { cn } from '@udecode/cn'

import { Icons } from '@/components/icons'

import type { TColor } from './color-dropdown-menu'

import { buttonVariants } from './button'
import { DropdownMenuItem } from './dropdown-menu'
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip'

type ColorDropdownMenuItemProps = {
  isBrightColor: boolean
  isSelected: boolean
  name?: string
  updateColor: (color: string) => void
  value: string
} & DropdownMenuItemProps

export function ColorDropdownMenuItem({
  className,
  isBrightColor,
  isSelected,
  name,
  updateColor,
  value,
  ...props
}: ColorDropdownMenuItemProps) {
  const content = (
    <DropdownMenuItem
      className={cn(
        buttonVariants({
          isMenu: true,
          variant: 'outline',
        }),
        'pce-size-6 pce-border pce-border-slate-200 pce-border-solid  pce-p-0 dark:pce-border-slate-800',
        !isBrightColor && 'pce-border-transparent pce-text-white',
        className
      )}
      onSelect={(e) => {
        e.preventDefault()
        updateColor(value)
      }}
      style={{ backgroundColor: value }}
      {...props}
    >
      {isSelected ? <Icons.check /> : null}
    </DropdownMenuItem>
  )

  return name ? (
    <Tooltip>
      <TooltipTrigger>{content}</TooltipTrigger>
      <TooltipContent>{name}</TooltipContent>
    </Tooltip>
  ) : (
    content
  )
}

type ColorDropdownMenuItemsProps = {
  color?: string
  colors: TColor[]
  updateColor: (color: string) => void
} & React.HTMLAttributes<HTMLDivElement>

export function ColorDropdownMenuItems({
  className,
  color,
  colors,
  updateColor,
  ...props
}: ColorDropdownMenuItemsProps) {
  return (
    <div
      className={cn(
        'pce-grid pce-grid-cols-[repeat(10,1fr)] pce-gap-1',
        className
      )}
      {...props}
    >
      {colors.map(({ isBrightColor, name, value }) => (
        <ColorDropdownMenuItem
          isBrightColor={isBrightColor}
          isSelected={color === value}
          key={name ?? value}
          name={name}
          updateColor={updateColor}
          value={value}
        />
      ))}
    </div>
  )
}
