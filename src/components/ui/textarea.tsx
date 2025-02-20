import * as React from "react"

import { cn } from "../../lib/utils"

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-2 border-input bg-secondary px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition",
            className
          )}
          ref={ref}
          {...props}
        />
        <span className="absolute bottom-[-35px] right-0 text-sm text-base">
          {props.value?.length} / {props.maxLength}
        </span>
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
