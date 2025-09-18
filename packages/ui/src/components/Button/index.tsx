"use client";
import React from "react";
import { ButtonProps } from "./button-types";
import { cn } from "../../lib/utils";

const variantKey = {
  primary:
    "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-stone-950 px-3 py-1.5 text-sm rounded-lg transition-colors duration-100 cursor-pointer disabled:opacity-40",
  secondary:
    "bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-gray-300 px-3 py-1.5 text-sm rounded-lg transition-colors duration-100 cursor-pointer disabled:opacity-40",
  danger:
    "bg-[var(--danger)] text-[var(--danger-foreground)] hover:bg-red-700 px-3 py-1.5 text-sm rounded-lg transition-colors duration-100 cursor-pointer disabled:opacity-40",
  success:
    "bg-[var(--success)] text-[var(--success-foreground)] hover:bg-green-700 px-3 py-1.5 text-sm rounded-lg transition-colors duration-100 cursor-pointer",
  outline:
    "border border-gray-400 text-gray-900 bg-transparent hover:bg-gray-100 px-3 py-1.5 text-sm rounded-lg transition-colors duration-100 cursor-pointer disabled:opacity-40",
  none: "bg-transparent text-inherit border-none p-0 m-0 shadow-none hover:bg-transparent cursor-pointer disabled:opacity-40",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", className, ...props }, ref) => {
    const variantClass = variantKey[variant] || variantKey.primary;

    return (
      <button
        ref={ref}
        className={cn(variantClass, className)}
        type="button"
        {...props}
      >
        {children || "Button"}
      </button>
    );
  }
);

Button.displayName = "Button";
