
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => {
    // Create a more reliable way to check for header context
    const separatorRef = React.useRef<HTMLDivElement>(null);
    const [isInHeader, setIsInHeader] = React.useState(false);
    
    // Check on mount and when the ref is attached if this is in a header
    React.useEffect(() => {
      if (separatorRef.current) {
        // Check if this element or any parent is a header
        let element = separatorRef.current;
        while (element) {
          if (element.tagName && element.tagName.toLowerCase() === 'header') {
            setIsInHeader(true);
            break;
          }
          element = element.parentElement as HTMLElement;
        }
      }
    }, []);

    // If in header context, don't render anything
    if (isInHeader) {
      return null;
    }

    return (
      <SeparatorPrimitive.Root
        ref={(node) => {
          // Handle both the forwarded ref and our internal ref
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
          if (separatorRef && node) {
            separatorRef.current = node as unknown as HTMLDivElement;
          }
        }}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        )}
        {...props}
      />
    );
  }
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
