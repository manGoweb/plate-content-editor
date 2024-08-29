import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu'

import {
  useLineHeightDropdownMenu,
  useLineHeightDropdownMenuState,
} from '@udecode/plate-line-height'

import { Icons } from '@/components/icons'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  useOpenState,
} from './dropdown-menu'
import { ToolbarButton } from './toolbar'

export function LineHeightDropdownMenu({ ...props }: DropdownMenuProps) {
  const openState = useOpenState()
  const state = useLineHeightDropdownMenuState()
  const { radioGroupProps } = useLineHeightDropdownMenu(state)

  return (
    <DropdownMenu modal={false} {...openState} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton
          isDropdown
          pressed={openState.open}
          tooltip="Line height"
        >
          <Icons.lineHeight />
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="pce-min-w-0">
        <DropdownMenuRadioGroup
          className="pce-flex pce-flex-col pce-gap-0.5"
          {...radioGroupProps}
        >
          {state.values.map((_value) => (
            <DropdownMenuRadioItem
              className="pce-min-w-[180px]"
              key={_value}
              value={_value}
            >
              {_value}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
