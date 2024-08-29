import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import { Tweet } from 'react-tweet'

import { cn, withRef } from '@udecode/cn'
import { PlateElement, withHOC } from '@udecode/plate-common/react'
import { parseTwitterUrl, parseVideoUrl } from '@udecode/plate-media'
import { MediaEmbedPlugin, useMediaState } from '@udecode/plate-media/react'
import { ResizableProvider, useResizableStore } from '@udecode/plate-resizable'

//import { Caption, CaptionTextarea } from './caption'
import { MediaPopover } from './media-popover'
import { Resizable, ResizeHandle, mediaResizeHandleVariants } from './resizable'

export const MediaEmbedElement = withHOC(
  ResizableProvider,
  withRef<typeof PlateElement>(({ children, className, ...props }, ref) => {
    const {
      align = 'center',
      embed,
      focused,
      isTweet,
      isVideo,
      isYoutube,
      readOnly,
      selected,
    } = useMediaState({
      urlParsers: [parseTwitterUrl, parseVideoUrl],
    })
    const _width = useResizableStore().get.width()
    const provider = embed?.provider

    return (
      <MediaPopover plugin={MediaEmbedPlugin}>
        <PlateElement
          className={cn('pce-relative pce-py-2.5', className)}
          ref={ref}
          {...props}
        >
          <figure
            className="pce-group pce-relative pce-m-0 pce-w-full"
            contentEditable={false}
          >
            <Resizable
              align={align}
              options={{
                align,
                maxWidth: isTweet ? 550 : '100%',
                minWidth: isTweet ? 300 : 100,
              }}
            >
              <ResizeHandle
                className={mediaResizeHandleVariants({ direction: 'left' })}
                options={{ direction: 'left' }}
              />

              {isVideo ? (
                isYoutube ? (
                  <LiteYouTubeEmbed
                    id={embed!.id!}
                    title="youtube"
                    wrapperClass={cn(
                      'pce-rounded-sm',
                      focused &&
                        selected &&
                        'pce-ring-2 pce-ring-slate-950 pce-ring-offset-2 dark:pce-ring-slate-300',
                      'pce-relative pce-block pce-cursor-pointer pce-bg-black pce-bg-cover pce-bg-center pce-[contain:content]',
                      '[&.lyt-activated]:before:pce-absolute [&.lyt-activated]:before:pce-top-0 [&.lyt-activated]:before:pce-h-[60px] [&.lyt-activated]:before:pce-w-full [&.lyt-activated]:before:pce-bg-top [&.lyt-activated]:before:pce-bg-repeat-x [&.lyt-activated]:before:pce-pb-[50px] [&.lyt-activated]:before:pce-[transition:all_0.2s_cubic-bezier(0,_0,_0.2,_1)]',
                      '[&.lyt-activated]:before:bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==)]',
                      'after:pce-block after:pce-pb-[var(--aspect-ratio)] after:content-[]',
                      '[&_>_iframe]:pce-absolute [&_>_iframe]:pce-left-0 [&_>_iframe]:pce-top-0 [&_>_iframe]:pce-size-full',
                      '[&_>_.lty-playbtn]:pce-z-[1] [&_>_.lty-playbtn]:pce-h-[46px] [&_>_.lty-playbtn]:pce-w-[70px] [&_>_.lty-playbtn]:pce-rounded-[14%] [&_>_.lty-playbtn]:pce-bg-[#212121] [&_>_.lty-playbtn]:pce-opacity-80 [&_>_.lty-playbtn]:pce-[transition:all_0.2s_cubic-bezier(0,_0,_0.2,_1)]',
                      '[&:hover_>_.lty-playbtn]:pce-bg-[red] [&:hover_>_.lty-playbtn]:pce-opacity-100',
                      '[&_>_.lty-playbtn]:before:pce-border-y-[11px] [&_>_.lty-playbtn]:before:pce-border-l-[19px] [&_>_.lty-playbtn]:before:pce-border-r-0 [&_>_.lty-playbtn]:before:pce-border-[transparent_transparent_transparent_#fff] [&_>_.lty-playbtn]:before:content-[]',
                      '[&_>_.lty-playbtn]:pce-absolute [&_>_.lty-playbtn]:pce-left-1/2 [&_>_.lty-playbtn]:pce-top-1/2 [&_>_.lty-playbtn]:pce-[transform:translate3d(-50%,-50%,0)]',
                      '[&_>_.lty-playbtn]:before:pce-absolute [&_>_.lty-playbtn]:before:pce-left-1/2 [&_>_.lty-playbtn]:before:pce-top-1/2 [&_>_.lty-playbtn]:before:pce-[transform:translate3d(-50%,-50%,0)]',
                      '[&.lyt-activated]:pce-cursor-[unset]',
                      '[&.lyt-activated]:before:pce-pointer-events-none [&.lyt-activated]:before:pce-opacity-0',
                      '[&.lyt-activated_>_.lty-playbtn]:pce-pointer-events-none [&.lyt-activated_>_.lty-playbtn]:!pce-opacity-0'
                    )}
                  />
                ) : (
                  <div
                    className={cn(
                      provider === 'vimeo' && 'pce-pb-[75%]',
                      provider === 'youku' && 'pce-pb-[56.25%]',
                      provider === 'dailymotion' && 'pce-pb-[56.0417%]',
                      provider === 'coub' && 'pce-pb-[51.25%]'
                    )}
                  >
                    <iframe
                      allowFullScreen
                      className={cn(
                        'pce-absolute pce-left-0 pce-top-0 pce-size-full pce-rounded-sm',
                        isVideo && 'pce-border-0',
                        focused &&
                          selected &&
                          'pce-ring-2 pce-ring-slate-950 pce-ring-offset-2 dark:pce-ring-slate-300'
                      )}
                      src={embed!.url}
                      title="embed"
                    />
                  </div>
                )
              ) : null}

              {isTweet && (
                <div
                  className={cn(
                    '[&_.react-tweet-theme]:pce-my-0',
                    !readOnly &&
                      selected &&
                      '[&_.react-tweet-theme]:pce-ring-2 [&_.react-tweet-theme]:pce-ring-slate-950 [&_.react-tweet-theme]:pce-ring-offset-2 dark:[&_.react-tweet-theme]:pce-ring-slate-300'
                  )}
                >
                  <Tweet id={embed!.id!} />
                </div>
              )}

              <ResizeHandle
                className={mediaResizeHandleVariants({ direction: 'right' })}
                options={{ direction: 'right' }}
              />
            </Resizable>

            {/* <Caption align={align} style={{ width }}>
              <CaptionTextarea placeholder="Write a caption..." />
            </Caption> */}
          </figure>

          {children}
        </PlateElement>
      </MediaPopover>
    )
  })
)
