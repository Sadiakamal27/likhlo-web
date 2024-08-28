import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactNode } from "react";
export function CustomTooltip({
  children,
  label,
}: {
  children: ReactNode;
  label: string | undefined;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent sideOffset={3}>{label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
