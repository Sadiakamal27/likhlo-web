import * as React from "react";

import { cn } from "@/lib/utils";

export interface GhostInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const GhostInput = React.forwardRef<HTMLInputElement, GhostInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md  bg-transparent px-3 py-1 text-sm  transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/30 focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
GhostInput.displayName = "GhostInput";

export { GhostInput };
