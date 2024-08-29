'use client'

import * as React from 'react'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '@udecode/cn'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    className={cn(
      'pce-inline-flex pce-h-10 pce-items-center pce-justify-center pce-rounded-md bg-muted pce-p-1 text-muted-foreground',
      className
    )}
    ref={ref}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    className={cn(
      'pce-inline-flex pce-items-center pce-justify-center pce-whitespace-nowrap pce-rounded-sm pce-px-3 pce-py-1.5 pce-text-sm pce-font-medium pce-ring-offset-background pce-transition-all focus-visible:pce-outline-none focus-visible:pce-ring-2 focus-visible:pce-ring-ring focus-visible:pce-ring-offset-2 disabled:pce-pointer-events-none disabled:pce-opacity-50 data-[state=active]:pce-bg-background data-[state=active]:pce-text-foreground data-[state=active]:pce-shadow-sm',
      className
    )}
    ref={ref}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    className={cn(
      'pce-mt-2 ring-offset-background focus-visible:pce-outline-none focus-visible:pce-ring-2 focus-visible:ring-ring focus-visible:pce-ring-offset-2',
      className
    )}
    ref={ref}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsContent, TabsList, TabsTrigger }
