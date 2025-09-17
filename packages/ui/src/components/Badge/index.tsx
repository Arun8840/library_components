"use client";
import React from "react";
import { cn } from "../../lib/utils";
import { BadgeProps } from "./badge-types";

const variantClasses = {
  default: "bg-gray-200 text-gray-800",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  danger: "bg-red-100 text-red-800",
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = "default",
  ...props
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium",
        variantClasses[variant],
        className
      )}
      {...props}
      type="button"
    >
      {children ?? "Badge"}
    </button>
  );
};

Badge.displayName = "Badge";
