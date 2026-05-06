"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "px-8 py-4 rounded-full font-label-caps text-label-caps transition-all flex justify-center items-center gap-2",
          variant === "primary" && "bg-primary text-on-primary hyper-glow",
          variant === "secondary" && "bg-transparent text-on-surface border border-white/20 hover:bg-white/5 backdrop-blur-md",
          variant === "outline" && "bg-transparent text-on-surface border border-white/10 hover:border-primary/50 hover:bg-primary/5",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
