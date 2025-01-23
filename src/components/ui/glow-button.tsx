import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface GlowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "relative px-6 py-3 text-lg font-semibold transition-all duration-300 ease-in-out",
          "bg-gradient-to-br from-[#702754] to-purple-800 hover:from-[#8a2e68] hover:to-purple-700",
          "text-white rounded-lg shadow-lg hover:shadow-xl overflow-hidden group",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-transparent via-pink-200 to-transparent opacity-30 blur-sm transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
        <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-pink-200 to-transparent opacity-30 blur-sm"></span>
      </button>
    );
  },
);

GlowButton.displayName = "GlowButton";
export { GlowButton };
