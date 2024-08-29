import { withRef, withVariants } from '@udecode/cn'
import { PlateElement } from '@udecode/plate-common'
import { cva } from 'class-variance-authority'

const headingVariants = cva('pce-', {
  variants: {
    isFirstBlock: {
      false: 'pce-',
      true: 'pce-mt-0',
    },
    variant: {
      h1: 'pce-mb-1 pce-mt-[2em] pce-font-heading pce-text-4xl pce-font-bold',
      h2: 'pce-mb-px pce-mt-[1.4em] pce-font-heading pce-text-2xl pce-font-semibold pce-tracking-tight',
      h3: 'pce-mb-px pce-mt-[1em] pce-font-heading pce-text-xl pce-font-semibold pce-tracking-tight',
      h4: 'pce-mt-[0.75em] pce-font-heading pce-text-lg pce-font-semibold pce-tracking-tight',
      h5: 'pce-mt-[0.75em] pce-text-lg pce-font-semibold pce-tracking-tight',
      h6: 'pce-mt-[0.75em] pce-text-base pce-font-semibold pce-tracking-tight',
    },
  },
})

const HeadingElementVariants = withVariants(PlateElement, headingVariants, [
  'isFirstBlock',
  'variant',
])

export const HeadingElement = withRef<typeof HeadingElementVariants>(
  ({ children, isFirstBlock, variant = 'h1', ...props }, ref) => {
    const { editor, element } = props

    const Element = variant!

    return (
      <HeadingElementVariants
        asChild
        isFirstBlock={element === editor.children[0]}
        ref={ref}
        variant={variant}
        {...props}
      >
        <Element>{children}</Element>
      </HeadingElementVariants>
    )
  }
)
