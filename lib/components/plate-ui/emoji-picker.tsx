import type { UseEmojiPickerType } from '@udecode/plate-emoji/react'

import { cn } from '@udecode/cn'
import { EmojiSettings } from '@udecode/plate-emoji'

import { EmojiPickerContent } from './emoji-picker-content'
import { EmojiPickerNavigation } from './emoji-picker-navigation'
import { EmojiPickerPreview } from './emoji-picker-preview'
import { EmojiPickerSearchAndClear } from './emoji-picker-search-and-clear'
import { EmojiPickerSearchBar } from './emoji-picker-search-bar'

export function EmojiPicker({
  clearSearch,
  emoji,
  emojiLibrary,
  focusedCategory,
  handleCategoryClick,
  hasFound,
  i18n,
  icons,
  isSearching,
  onMouseOver,
  onSelectEmoji,
  refs,
  searchResult,
  searchValue,
  setSearch,
  settings = EmojiSettings,
  visibleCategories,
}: UseEmojiPickerType) {
  return (
    <div
      className={cn(
        'pce-flex pce-flex-col pce-rounded-xl pce-bg-white dark:pce-bg-slate-950',
        'pce-h-[23rem] pce-w-80 pce-border pce-border-slate-200 pce-shadow-md dark:pce-border-slate-800'
      )}
    >
      <EmojiPickerNavigation
        emojiLibrary={emojiLibrary}
        focusedCategory={focusedCategory}
        i18n={i18n}
        icons={icons}
        onClick={handleCategoryClick}
      />
      <EmojiPickerSearchBar
        i18n={i18n}
        searchValue={searchValue}
        setSearch={setSearch}
      >
        <EmojiPickerSearchAndClear
          clearSearch={clearSearch}
          i18n={i18n}
          searchValue={searchValue}
        />
      </EmojiPickerSearchBar>
      <EmojiPickerContent
        emojiLibrary={emojiLibrary}
        i18n={i18n}
        isSearching={isSearching}
        onMouseOver={onMouseOver}
        onSelectEmoji={onSelectEmoji}
        refs={refs}
        searchResult={searchResult}
        settings={settings}
        visibleCategories={visibleCategories}
      />
      <EmojiPickerPreview
        emoji={emoji}
        hasFound={hasFound}
        i18n={i18n}
        isSearching={isSearching}
      />
    </div>
  )
}
