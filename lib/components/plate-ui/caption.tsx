// import { cn, createPrimitiveComponent, withCn, withVariants } from '@udecode/cn'
// import {
//   Caption as CaptionPrimitive,
//   CaptionTextarea as CaptionTextareaPrimitive,
//   useCaptionButton,
//   useCaptionButtonState,
// } from '@udecode/plate-caption/react'
// import { cva } from 'class-variance-authority'

// import { Button } from './button'

// const captionVariants = cva('pce-max-w-full', {
//   defaultVariants: {
//     align: 'center',
//   },
//   variants: {
//     align: {
//       center: 'pce-mx-auto',
//       left: 'pce-mr-auto',
//       right: 'pce-ml-auto',
//     },
//   },
// })

// export const Caption = withVariants(CaptionPrimitive, captionVariants, [
//   'align',
// ])

// export const CaptionTextarea = withCn(
//   CaptionTextareaPrimitive,
//   cn(
//     'pce-mt-2 pce-w-full pce-resize-none pce-border-none pce-bg-inherit pce-p-0 pce-font-[inherit] pce-text-inherit',
//     'focus:pce-outline-none focus:[&::placeholder]:pce-opacity-0',
//     'pce-text-center print:placeholder:pce-text-transparent'
//   )
// )

// export const CaptionButton = createPrimitiveComponent(Button)({
//   propsHook: useCaptionButton,
//   stateHook: useCaptionButtonState,
// })
