import type { UseEmojiPickerType } from '@udecode/plate-emoji'

import { cn } from '@udecode/cn'
import { DeleteIcon, SearchIcon } from 'lucide-react'

import { Button } from './button'

export type EmojiPickerSearchAndClearProps = Pick<
  UseEmojiPickerType,
  'clearSearch' | 'i18n' | 'searchValue'
>

export function EmojiPickerSearchAndClear({
  clearSearch,
  i18n,
  searchValue,
}: EmojiPickerSearchAndClearProps) {
  return (
    <div className="pce-flex pce-items-center">
      <div
        className={cn(
          'pce-absolute pce-left-3 pce-top-1/2 pce-z-10 pce-flex pce-size-5 pce-translate-y-1/2 pce-items-center pce-justify-center'
        )}
      >
        <SearchIcon className="pce-size-4" />
      </div>
      {searchValue && (
        <Button
          aria-label="Clear"
          className={cn(
            'pce-absolute pce-right-1 pce-top-1/2 pce-flex pce-size-8 pce-translate-y-1/2 pce-cursor-pointer pce-items-center pce-justify-center pce-border-none pce-bg-transparent'
          )}
          onClick={clearSearch}
          size="icon"
          title={i18n.clear}
          type="button"
          variant="ghost"
        >
          <DeleteIcon className="pce-size-4" />
        </Button>
      )}
    </div>
  )
}
