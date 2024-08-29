import { Slot } from '@radix-ui/react-slot'
import { cn, withRef } from '@udecode/cn'
import { type VariantProps, cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'pce-inline-flex pce-items-center pce-justify-center pce-whitespace-nowrap pce-rounded-md pce-text-sm pce-font-medium pce-ring-offset-white pce-transition-colors focus-visible:pce-outline-none focus-visible:pce-ring-2 focus-visible:pce-ring-slate-950 focus-visible:pce-ring-offset-2 disabled:pce-pointer-events-none disabled:pce-opacity-50 dark:pce-ring-offset-slate-950 dark:focus-visible:pce-ring-slate-300',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      isMenu: {
        true: 'pce-h-auto pce-w-full pce-cursor-pointer pce-justify-start',
      },
      size: {
        default: 'pce-h-10 pce-px-4 pce-py-2',
        icon: 'pce-size-10',
        lg: 'pce-h-11 pce-rounded-md pce-px-8',
        none: 'pce-',
        sm: 'pce-h-9 pce-rounded-md pce-px-3',
        sms: 'pce-size-9 pce-rounded-md pce-px-0',
        xs: 'pce-h-8 pce-rounded-md pce-px-3',
      },
      variant: {
        default:
          'pce-bg-slate-900 pce-text-slate-50 hover:pce-bg-slate-900/90 dark:pce-bg-slate-50 dark:pce-text-slate-900 dark:hover:pce-bg-slate-50/90',
        destructive:
          'pce-bg-red-500 pce-text-slate-50 hover:pce-bg-red-500/90 dark:pce-bg-red-900 dark:pce-text-slate-50 dark:hover:pce-bg-red-900/90',
        ghost:
          'hover:pce-bg-slate-100 hover:pce-text-slate-900 dark:hover:pce-bg-slate-800 dark:hover:pce-text-slate-50',
        inlineLink:
          'pce-text-base pce-text-slate-900 pce-underline pce-underline-offset-4 dark:pce-text-slate-50',
        link: 'pce-text-slate-900 pce-underline-offset-4 hover:pce-underline dark:pce-text-slate-50',
        outline:
          'pce-border pce-border-slate-200 pce-bg-white hover:pce-bg-slate-100 hover:pce-text-slate-900 dark:pce-border-slate-800 dark:pce-bg-slate-950 dark:hover:pce-bg-slate-800 dark:hover:pce-text-slate-50',
        secondary:
          'pce-bg-slate-100 pce-text-slate-900 hover:pce-bg-slate-100/80 dark:pce-bg-slate-800 dark:pce-text-slate-50 dark:hover:pce-bg-slate-800/80',
      },
    },
  }
)

export const Button = withRef<
  'button',
  {
    asChild?: boolean
  } & VariantProps<typeof buttonVariants>
>(({ asChild = false, className, isMenu, size, variant, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={cn(buttonVariants({ className, isMenu, size, variant }))}
      ref={ref}
      {...props}
    />
  )
})
