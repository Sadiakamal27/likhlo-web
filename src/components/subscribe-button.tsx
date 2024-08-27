import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { GiSpellBook } from "react-icons/gi";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const SubscribeButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <>
        {" "}
        <Comp className={cn({ className })} ref={ref} {...props}>
          <a
            href="#_"
            className="w-full relative inline-flex items-center bg-primary justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
          >
            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
            </span>
            <span className="relative flex gap-4 text-white">
              <GiSpellBook className="w-6 h-6" />
              Subsribe for Updates
            </span>
          </a>
        </Comp>
      </>
    );
  },
);
SubscribeButton.displayName = "Button";

export { SubscribeButton };
