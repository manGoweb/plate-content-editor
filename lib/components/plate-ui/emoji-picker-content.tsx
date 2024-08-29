import { memo, useCallback } from 'react'

import type { UseEmojiPickerType } from '@udecode/plate-emoji/react'

import { cn } from '@udecode/cn'
import { type Emoji, EmojiSettings, type GridRow } from '@udecode/plate-emoji'

export type EmojiPickerContentProps = Pick<
  UseEmojiPickerType,
  | 'emojiLibrary'
  | 'i18n'
  | 'isSearching'
  | 'onMouseOver'
  | 'onSelectEmoji'
  | 'refs'
  | 'searchResult'
  | 'settings'
  | 'visibleCategories'
>

export type EmojiButtonProps = {
  emoji: Emoji
  index: number
  onMouseOver: (emoji?: Emoji) => void
  onSelect: (emoji: Emoji) => void
}

export type RowOfButtonsProps = {
  row: GridRow
} & Pick<UseEmojiPickerType, 'emojiLibrary' | 'onMouseOver' | 'onSelectEmoji'>

const Button = memo(
  ({ emoji, index, onMouseOver, onSelect }: EmojiButtonProps) => {
    return (
      <button
        aria-label={emoji.skins[0].native}
        className="pce-group pce-relative pce-flex pce-size-9 pce-cursor-pointer pce-items-center pce-justify-center pce-border-none pce-bg-transparent pce-text-2xl pce-leading-none"
        data-index={index}
        onClick={() => onSelect(emoji)}
        onMouseEnter={() => onMouseOver(emoji)}
        onMouseLeave={() => onMouseOver()}
        tabIndex={-1}
        type="button"
      >
        <div
          aria-hidden="true"
          className="pce-absolute pce-inset-0 pce-rounded-full pce-opacity-0 group-hover:pce-opacity-100"
        />
        <span data-emoji-set="native" style={{ position: 'relative' }}>
          {emoji.skins[0].native}
        </span>
      </button>
    )
  }
)
Button.displayName = 'Button'

const RowOfButtons = memo(
  ({ emojiLibrary, onMouseOver, onSelectEmoji, row }: RowOfButtonsProps) => (
    <div className="pce-flex" data-index={row.id} key={row.id}>
      {row.elements.map((emojiId, index) => (
        <Button
          emoji={emojiLibrary.getEmoji(emojiId)}
          index={index}
          key={emojiId}
          onMouseOver={onMouseOver}
          onSelect={onSelectEmoji}
        />
      ))}
    </div>
  )
)
RowOfButtons.displayName = 'RowOfButtons'

export function EmojiPickerContent({
  emojiLibrary,
  i18n,
  isSearching = false,
  onMouseOver,
  onSelectEmoji,
  refs,
  searchResult,
  settings = EmojiSettings,
  visibleCategories,
}: EmojiPickerContentProps) {
  const getRowWidth = settings.perLine.value * settings.buttonSize.value

  const isCategoryVisible = useCallback(
    (categoryId: any) => {
      return visibleCategories.has(categoryId)
        ? visibleCategories.get(categoryId)
        : false
    },
    [visibleCategories]
  )

  const EmojiList = useCallback(() => {
    return emojiLibrary
      .getGrid()
      .sections()
      .map(({ id: categoryId }) => {
        const section = emojiLibrary.getGrid().section(categoryId)
        const { buttonSize } = settings

        return (
          <div
            data-id={categoryId}
            key={categoryId}
            ref={section.root}
            style={{ width: getRowWidth }}
          >
            <div className="pce-sticky pce-top-px pce-z-[1] pce-bg-white/90 pce-p-1 pce-py-2 pce-text-sm pce-font-semibold pce-backdrop-blur-sm dark:pce-bg-slate-950/90">
              {i18n.categories[categoryId]}
            </div>
            <div
              className="pce-relative pce-flex pce-flex-wrap"
              style={{ height: section.getRows().length * buttonSize.value }}
            >
              {isCategoryVisible(categoryId) &&
                section
                  .getRows()
                  .map((row: GridRow) => (
                    <RowOfButtons
                      emojiLibrary={emojiLibrary}
                      key={row.id}
                      onMouseOver={onMouseOver}
                      onSelectEmoji={onSelectEmoji}
                      row={row}
                    />
                  ))}
            </div>
          </div>
        )
      })
  }, [
    emojiLibrary,
    getRowWidth,
    i18n.categories,
    isCategoryVisible,
    onSelectEmoji,
    onMouseOver,
    settings,
  ])

  const SearchList = useCallback(() => {
    return (
      <div data-id="search" style={{ width: getRowWidth }}>
        <div className="pce-sticky pce-top-px pce-z-[1] pce-bg-white/90 pce-p-1 pce-py-2 pce-font-semibold pce-backdrop-blur-sm dark:pce-bg-slate-950/90">
          {i18n.searchResult}
        </div>
        <div className="pce-relative pce-flex pce-flex-wrap">
          {searchResult.map((emoji: Emoji, index: number) => (
            <Button
              emoji={emojiLibrary.getEmoji(emoji.id)}
              index={index}
              key={emoji.id}
              onMouseOver={onMouseOver}
              onSelect={onSelectEmoji}
            />
          ))}
        </div>
      </div>
    )
  }, [
    emojiLibrary,
    getRowWidth,
    i18n.searchResult,
    searchResult,
    onSelectEmoji,
    onMouseOver,
  ])

  return (
    <div
      className={cn(
        'pce-h-full pce-min-h-[50%] pce-overflow-y-auto pce-overflow-x-hidden pce-px-3',
        '[&::-webkit-scrollbar]:pce-w-4',
        '[&::-webkit-scrollbar-button]:pce-hidden [&::-webkit-scrollbar-button]:pce-size-0',
        ':hover:[&::-webkit-scrollbar-thumb]:pce-bg-[#f3f4f6]',
        '[&::-webkit-scrollbar-thumb]:pce-min-h-[65px] [&::-webkit-scrollbar-thumb]:pce-rounded-2xl [&::-webkit-scrollbar-thumb]:pce-border-4 [&::-webkit-scrollbar-thumb]:pce-border-white',
        '[&::-webkit-scrollbar-track]:pce-border-0'
      )}
      data-id="scroll"
      ref={refs.current.contentRoot}
    >
      <div className="pce-h-full" ref={refs.current.content}>
        {isSearching ? SearchList() : EmojiList()}
      </div>
    </div>
  )
}
