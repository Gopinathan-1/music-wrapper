"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "px-8 py-4 rounded-full font-label-caps text-label-caps transition-all flex justify-center items-center gap-2",
          variant === "primary" && "bg-primary text-on-primary hyper-glow",
          variant === "secondary" && "bg-transparent text-on-surface border border-white/20 hover:bg-white/5 backdrop-blur-md",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
