'use client';

import { cn } from '@/lib/utils';

import * as React from 'react';

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => {
  // Ref to the viewport DOM element
  const viewportRef = React.useRef<HTMLDivElement>(null);
  // Track if dragging is in progress
  const isDragging = React.useRef(false);
  // Store starting pointer coordinates and scroll offsets
  const startX = React.useRef(0);
  const startY = React.useRef(0);
  const scrollLeft = React.useRef(0);
  const scrollTop = React.useRef(0);

  // Pointer down: check if click is on a link before initiating drag
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Check if the click target is a link or within a link
    const target = e.target as HTMLElement;
    if (target.closest('a')) {
      return; // Don't initiate drag if clicking on a link
    }

    if (!viewportRef.current) return;
    isDragging.current = true;
    // Capture the pointer for consistent tracking
    viewportRef.current.setPointerCapture(e.pointerId);
    startX.current = e.clientX;
    startY.current = e.clientY;
    scrollLeft.current = viewportRef.current.scrollLeft;
    scrollTop.current = viewportRef.current.scrollTop;
  };

  // Pointer move: update scroll position based on movement
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !viewportRef.current) return;
    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;
    viewportRef.current.scrollLeft = scrollLeft.current - dx;
    viewportRef.current.scrollTop = scrollTop.current - dy;
  };

  // Pointer up or leave: end the dragging action
  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    if (viewportRef.current) {
      viewportRef.current.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn('relative overflow-hidden', className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        ref={viewportRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        // Apply cursor styles to indicate draggable behavior
        className="h-full w-full cursor-grab rounded-[inherit] active:cursor-grabbing"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
});
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      'flex touch-none select-none transition-colors',
      orientation === 'vertical' &&
        'h-full w-2.5 border-l border-l-transparent p-[1px]',
      orientation === 'horizontal' &&
        'h-2.5 flex-col border-t border-t-transparent p-[1px]',
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="bg-border relative flex-1 rounded-full" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
