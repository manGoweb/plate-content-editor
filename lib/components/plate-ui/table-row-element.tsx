import { cn, withRef } from '@udecode/cn'
import { PlateElement } from '@udecode/plate-common'

export const TableRowElement = withRef<
  typeof PlateElement,
  {
    hideBorder?: boolean
  }
>(({ children, hideBorder, ...props }, ref) => {
  return (
    <PlateElement
      asChild
      className={cn('pce-h-full', hideBorder && 'pce-border-none')}
      ref={ref}
      {...props}
    >
      <tr>{children}</tr>
    </PlateElement>
  )
})
