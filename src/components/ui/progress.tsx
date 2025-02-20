import { useState, useEffect } from "react"
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "../../lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, max, ...props }) => {
  const [percentage, setPercentage] = useState<number>(0)
  const progressRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    setPercentage(value && max && max > 0 ? (value / max) * 100 : 0)
  }, [value])

  return (
    <div className="relative py-[10px]">
      <ProgressPrimitive.Root
        ref={progressRef}
        className={cn("relative h-4 w-full rounded-full bg-secondary overflow-hidden", className)}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className="h-full w-full flex-1 bg-primary transition-all"
          style={{ transform: `translateX(-${100 - percentage}%)` }}
        />
      </ProgressPrimitive.Root>
      <div
        className="absolute top-0 w-[36px] h-[36px] bg-white flex-center rounded-full shadow-lg text-sm transition"
        style={{
          transform: `translateX(calc(${((progressRef.current ? progressRef.current.offsetWidth : 0) * percentage) / 100}px - 18px))`,
        }}
      >
        {value}
      </div>
    </div>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
