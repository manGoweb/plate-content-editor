import { withVariants } from '@udecode/cn'
import { cva } from 'class-variance-authority'

export const inputVariants = cva(
  'pce-flex pce-w-full pce-rounded-md pce-bg-transparent pce-text-sm file:pce-border-0 file:pce-bg-white file:pce-text-sm file:pce-font-medium placeholder:pce-text-slate-500 focus-visible:pce-outline-none disabled:pce-cursor-not-allowed disabled:pce-opacity-50 dark:file:pce-bg-slate-950 dark:placeholder:pce-text-slate-400',
  {
    defaultVariants: {
      h: 'md',
      variant: 'default',
    },
    variants: {
      h: {
        md: 'pce-h-10 pce-px-3 pce-py-2',
        sm: 'pce-h-9 pce-px-3 pce-py-2',
      },
      variant: {
        default:
          'pce-border pce-border-slate-200 pce-ring-offset-white focus-visible:pce-ring-2 focus-visible:pce-ring-slate-950 focus-visible:pce-ring-offset-2 dark:pce-border-slate-800 dark:pce-ring-offset-slate-950 dark:focus-visible:pce-ring-slate-300',
        ghost: 'pce-border-none focus-visible:pce-ring-transparent',
      },
    },
  }
)

export const Input = withVariants('input', inputVariants, ['variant', 'h'])
