import { cn, withRef } from '@udecode/cn'
import { PlateElement, withHOC } from '@udecode/plate-common/react'
import { Image, ImagePlugin, useMediaState } from '@udecode/plate-media/react'
import { ResizableProvider, useResizableStore } from '@udecode/plate-resizable'

// import { Caption, CaptionTextarea } from './caption'
import { MediaPopover } from './media-popover'
import { Resizable, ResizeHandle, mediaResizeHandleVariants } from './resizable'

export const ImageElement = withHOC(
  ResizableProvider,
  withRef<typeof PlateElement>(
    ({ children, className, nodeProps, ...props }, ref) => {
      const { align = 'center', focused, readOnly, selected } = useMediaState()

      const _width = useResizableStore().get.width()

      return (
        <MediaPopover plugin={ImagePlugin}>
          <PlateElement
            className={cn('pce-py-2.5', className)}
            ref={ref}
            {...props}
          >
            <figure
              className="pce-group pce-relative pce-m-0"
              contentEditable={false}
            >
              <Resizable
                align={align}
                options={{
                  align,
                  readOnly,
                }}
              >
                <ResizeHandle
                  className={mediaResizeHandleVariants({ direction: 'left' })}
                  options={{ direction: 'left' }}
                />
                <Image
                  alt=""
                  className={cn(
                    'pce-block pce-w-full pce-max-w-full pce-cursor-pointer pce-object-cover pce-px-0',
                    'pce-rounded-sm',
                    focused &&
                      selected &&
                      'pce-ring-2 pce-ring-slate-950 pce-ring-offset-2 dark:pce-ring-slate-300'
                  )}
                  {...nodeProps}
                />
                <ResizeHandle
                  className={mediaResizeHandleVariants({
                    direction: 'right',
                  })}
                  options={{ direction: 'right' }}
                />
              </Resizable>

              {/* <Caption align={align} style={{ width }}>
                <CaptionTextarea
                  placeholder="Write a caption..."
                  readOnly={readOnly}
                />
              </Caption> */}
            </figure>

            {children}
          </PlateElement>
        </MediaPopover>
      )
    }
  )
)
