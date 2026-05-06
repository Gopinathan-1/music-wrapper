import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface DNAChipProps extends HTMLAttributes<HTMLSpanElement> {
  color?: "primary" | "secondary" | "tertiary";
}

export const DNAChip = forwardRef<HTMLSpanElement, DNAChipProps>(
  ({ className, color = "primary", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "px-3 py-1 rounded-full font-label-caps text-[10px]",
          color === "primary" && "bg-primary/10 text-primary",
          color === "secondary" && "bg-secondary-fixed/10 text-secondary-fixed",
          color === "tertiary" && "bg-tertiary/10 text-tertiary",
          className
        )}
        {...props}
      />
    );
  }
);
DNAChip.displayName = "DNAChip";
