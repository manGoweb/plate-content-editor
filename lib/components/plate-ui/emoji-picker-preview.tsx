import type { UseEmojiPickerType } from '@udecode/plate-emoji'

export type EmojiPickerPreviewProps = Pick<
  UseEmojiPickerType,
  'emoji' | 'hasFound' | 'i18n' | 'isSearching'
>

export type EmojiPreviewProps = Pick<UseEmojiPickerType, 'emoji'>

export type NoEmojiPreviewProps = Pick<UseEmojiPickerType, 'i18n'>

export type PickAnEmojiPreviewProps = NoEmojiPreviewProps

function EmojiPreview({ emoji }: EmojiPreviewProps) {
  return (
    <div className="pce-flex pce-h-20 pce-items-center pce-border-t pce-border-slate-100 pce-p-2 dark:pce-border-slate-800">
      <div className="pce-flex pce-items-center pce-justify-center pce-text-2xl">
        {emoji?.skins[0].native}
      </div>
      <div className="pce-overflow-hidden pce-pl-2">
        <div className="pce-truncate pce-text-sm">{emoji?.name}</div>
        <div className="pce-truncate pce-text-xs">{`:${emoji?.id}:`}</div>
      </div>
    </div>
  )
}

function NoEmoji({ i18n }: NoEmojiPreviewProps) {
  return (
    <div className="pce-flex pce-h-20 pce-items-center pce-border-t pce-border-slate-100 pce-p-2 dark:pce-border-slate-800">
      <div className="pce-flex pce-items-center pce-justify-center pce-text-2xl">
        😢
      </div>
      <div className="pce-overflow-hidden pce-pl-2">
        <div className="pce-truncate pce-text-sm pce-font-semibold pce-text-slate-900 dark:pce-text-slate-50">
          {i18n.searchNoResultsTitle}
        </div>
        <div className="pce-truncate pce-text-xs">
          {i18n.searchNoResultsSubtitle}
        </div>
      </div>
    </div>
  )
}

function PickAnEmoji({ i18n }: PickAnEmojiPreviewProps) {
  return (
    <div className="pce-flex pce-h-20 pce-items-center pce-border-t pce-border-slate-100 pce-p-2 dark:pce-border-slate-800">
      <div className="pce-flex pce-items-center pce-justify-center pce-text-2xl">
        ☝️
      </div>
      <div className="pce-overflow-hidden pce-pl-2">
        <div className="pce-truncate pce-text-sm pce-font-semibold">
          {i18n.pick}
        </div>
      </div>
    </div>
  )
}

export function EmojiPickerPreview({
  emoji,
  hasFound = true,
  i18n,
  isSearching = false,
  ...props
}: EmojiPickerPreviewProps) {
  const showPickEmoji = !emoji && !(isSearching && !hasFound)
  const showNoEmoji = isSearching && !hasFound
  const showPreview = emoji

  return (
    <>
      {showPreview && <EmojiPreview emoji={emoji} {...props} />}
      {showPickEmoji && <PickAnEmoji i18n={i18n} {...props} />}
      {showNoEmoji && <NoEmoji i18n={i18n} {...props} />}
    </>
  )
}
