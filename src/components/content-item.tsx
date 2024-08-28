import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { FiPlus } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border bg-red-500 border-input bg-muted/80 dark:bg-muted/30 dark:hover:bg-accent shadow-sm hover:bg-accent hover:text-accent-foreground",
        solid: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent bg-accent/20 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        topic: " font-bold h-10 px-4 py-2 w-[90%]  flex  justify-between",
        subtopic: "h-9 rounded-md px-3 text-sm w-[87%]  flex  justify-between",
        chapter:
          "h-12 text-md font-bold rounded-md px-4 py-2 w-full flex justify-between",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "chapter",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const ContentItem = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <div className="flex justify-end flex-row gap-3">
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        ></Comp>
        <Button size="icon" variant={size == "chapter" ? "outline" : "ghost"}>
          <FiPlus className="h-4 w-4" />
        </Button>
      </div>
    );
  },
);
ContentItem.displayName = "Button";

export { ContentItem, buttonVariants };
