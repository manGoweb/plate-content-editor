import type React from 'react'

import type { EmojiCategoryList } from '@udecode/plate-emoji'

import {
  AppleIcon,
  ClockIcon,
  CompassIcon,
  DeleteIcon,
  FlagIcon,
  LeafIcon,
  LightbulbIcon,
  MusicIcon,
  SearchIcon,
  SmileIcon,
  StarIcon,
} from 'lucide-react'

export const emojiCategoryIcons: Record<
  EmojiCategoryList,
  { outline: React.ReactElement; solid: React.ReactElement }
> = {
  activity: {
    outline: (
      <svg
        className="pce-size-full"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2.1 13.4A10.1 10.1 0 13.4 2.1" />
        <path d="m5 4.9 14 14.2" />
        <path d="M21.9 10.6a10.1 10.1 0 0-11.3 11.3" />
      </svg>
    ),
    // Needed to add another solid variant - outline will be used for now
    solid: (
      <svg
        className="pce-size-full"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2.1 13.4A10.1 10.1 0 13.4 2.1" />
        <path d="m5 4.9 14 14.2" />
        <path d="M21.9 10.6a10.1 10.1 0 0-11.3 11.3" />
      </svg>
    ),
  },

  custom: {
    outline: <StarIcon className="pce-size-full" />,
    // Needed to add another solid variant - outline will be used for now
    solid: <StarIcon className="pce-size-full" />,
  },

  flags: {
    outline: <FlagIcon className="pce-size-full" />,
    // Needed to add another solid variant - outline will be used for now
    solid: <FlagIcon className="pce-size-full" />,
  },

  foods: {
    outline: <AppleIcon className="pce-size-full" />,
    // Needed to add another solid variant - outline will be used for now
    solid: <AppleIcon className="pce-size-full" />,
  },

  frequent: {
    outline: <ClockIcon className="pce-size-full" />,
    // Needed to add another solid variant - outline will be used for now
    solid: <ClockIcon className="pce-size-full" />,
  },

  nature: {
    outline: <LeafIcon className="pce-size-full" />,
    // Needed to add another solid variant - outline will be used for now
    solid: <LeafIcon className="pce-size-full" />,
  },

  objects: {
    outline: <LightbulbIcon className="pce-size-full" />,
    // Needed to add another solid variant - outline will be used for now
    solid: <LightbulbIcon className="pce-size-full" />,
  },

  people: {
    outline: <SmileIcon className="pce-size-full" />,
    // Needed to add another solid variant - outline will be used for now
    solid: <SmileIcon className="pce-size-full" />,
  },

  places: {
    outline: <CompassIcon className="pce-size-full" />,
    // Needed to add another solid variant - outline will be used for now
    solid: <CompassIcon className="pce-size-full" />,
  },

  symbols: {
    outline: <MusicIcon className="pce-size-full" />,
    // Needed to add another solid variant - outline will be used for now
    solid: <MusicIcon className="pce-size-full" />,
  },
}

export const emojiSearchIcons = {
  delete: <DeleteIcon className="pce-size-4" />,

  loupe: <SearchIcon className="pce-size-4" />,
}
