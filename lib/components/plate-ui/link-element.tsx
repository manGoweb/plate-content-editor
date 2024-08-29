import { cn, withRef } from '@udecode/cn'
import { PlateElement, useElement } from '@udecode/plate-common'
import { type TLinkElement, useLink } from '@udecode/plate-link'

export const LinkElement = withRef<typeof PlateElement>(
  ({ children, className, ...props }, ref) => {
    const element = useElement<TLinkElement>()
    const { props: linkProps } = useLink({ element })

    return (
      <PlateElement
        asChild
        className={cn(
          'pce-font-medium pce-text-slate-900 pce-underline pce-decoration-primary pce-underline-offset-4 dark:pce-text-slate-50',
          className
        )}
        ref={ref}
        {...(linkProps as any)}
        {...props}
      >
        <a>{children}</a>
      </PlateElement>
    )
  }
)
