"use client";
import React from "react";
import { ButtonProps } from "./button-types";
import { cn } from "../../lib/utils";

const variantKey = {
  primary:
    "bg-stone-900 text-white hover:bg-stone-950 px-4 py-1.5 text-sm rounded-lg transition-colors duration-150 cursor-pointer",
  secondary:
    "bg-gray-200 text-gray-900 hover:bg-gray-300 px-4 py-1.5 text-sm rounded-lg transition-colors duration-150 cursor-pointer",
  danger:
    "bg-red-600 text-white hover:bg-red-700 px-4 py-1.5 text-sm rounded-lg transition-colors duration-150 cursor-pointer",
  outline:
    "border border-gray-400 text-gray-900 bg-transparent hover:bg-gray-100 px-4 py-1.5 text-sm rounded-lg transition-colors duration-150 cursor-pointer",
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
        {children ?? "Button"}
      </button>
    );
  }
);

Button.displayName = "Button";
