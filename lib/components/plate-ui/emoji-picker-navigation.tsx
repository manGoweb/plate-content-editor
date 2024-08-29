import type { EmojiCategoryList } from '@udecode/plate-emoji'
import type {
  IEmojiFloatingLibrary,
  UseEmojiPickerType,
} from '@udecode/plate-emoji/react'

import { cn } from '@udecode/cn'

import { Button } from './button'

export type EmojiPickerNavigationProps = {
  onClick: (id: EmojiCategoryList) => void
} & Pick<
  UseEmojiPickerType,
  'emojiLibrary' | 'focusedCategory' | 'i18n' | 'icons'
>

const getBarProperty = (
  emojiLibrary: IEmojiFloatingLibrary,
  focusedCategory?: EmojiCategoryList
) => {
  let width = 0
  let position = 0

  if (focusedCategory) {
    width = 100 / emojiLibrary.getGrid().size
    position = focusedCategory ? emojiLibrary.indexOf(focusedCategory) * 100 : 0
  }

  return { position, width }
}

export function EmojiPickerNavigation({
  emojiLibrary,
  focusedCategory,
  i18n,
  icons,
  onClick,
}: EmojiPickerNavigationProps) {
  const { position, width } = getBarProperty(emojiLibrary, focusedCategory)

  return (
    <nav
      className="pce-mb-2.5 pce-border-0 pce-border-b pce-border-solid pce-border-b-border pce-p-3"
      id="emoji-nav"
    >
      <div className="pce-relative pce-flex pce-items-center">
        {emojiLibrary
          .getGrid()
          .sections()
          .map(({ id }) => (
            <Button
              aria-label={i18n.categories[id]}
              className={cn(
                'pce-size-6 pce-grow pce-fill-current pce-text-slate-500 hover:pce-bg-transparent hover:pce-text-slate-950 dark:pce-text-slate-400 dark:hover:pce-text-slate-50',
                id === focusedCategory &&
                  'pce-pointer-events-none pce-fill-current pce-text-slate-900 dark:pce-text-slate-50'
              )}
              key={id}
              onClick={() => onClick(id)}
              size="icon"
              title={i18n.categories[id]}
              type="button"
              variant="ghost"
            >
              <span className="pce-size-5">{icons.categories[id].outline}</span>
            </Button>
          ))}
        <div
          className="pce-absolute  -pce-bottom-3 pce-h-0.5 pce-w-full pce-rounded-t-lg pce-bg-slate-900 pce-opacity-100 pce-transition-transform pce-duration-200 dark:pce-bg-slate-50"
          style={{
            transform: `translateX(${position}%)`,
            visibility: `${focusedCategory ? 'visible' : 'hidden'}`,
            width: `${width}%`,
          }}
        />
      </div>
    </nav>
  )
}
