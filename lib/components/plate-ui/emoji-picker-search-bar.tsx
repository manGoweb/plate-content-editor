import type { ReactNode } from 'react'

import type { UseEmojiPickerType } from '@udecode/plate-emoji/react'

export type EmojiPickerSearchBarProps = {
  children: ReactNode
} & Pick<UseEmojiPickerType, 'i18n' | 'searchValue' | 'setSearch'>

export function EmojiPickerSearchBar({
  children,
  i18n,
  searchValue,
  setSearch,
}: EmojiPickerSearchBarProps) {
  return (
    <div className="pce-flex pce-items-center pce-px-2">
      <div className="pce-relative pce-flex pce-grow pce-items-center">
        <input
          aria-label="Search"
          autoComplete="off"
          className="pce-block pce-w-full pce-appearance-none pce-rounded-full pce-border-0 pce-bg-slate-100 pce-px-10 pce-py-2 pce-text-sm pce-outline-none placeholder:pce-text-slate-500 focus-visible:pce-outline-none dark:pce-bg-slate-800 dark:placeholder:pce-text-slate-400"
          onChange={(event) => setSearch(event.target.value)}
          placeholder={i18n.search}
          type="text"
          value={searchValue}
        />
        {children}
      </div>
    </div>
  )
}
