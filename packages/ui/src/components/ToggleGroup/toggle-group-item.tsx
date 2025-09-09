"use client";

import React from "react";
import { ToggleGroupItemProps } from "./toggle-types";
import { cn } from "../../lib/utils";

const baseItemClass =
  "px-3 py-1.5 disabled:pointer-events-none hover:bg-stone-100 w-full last:rounded-r first:rounded-l has-checked:bg-stone-200";

export const ToggleGroupItem: React.FC<ToggleGroupItemProps> = ({
  children,
  className,
  value,
  disabled,
  ...props
}) => {
  return (
    <label
      htmlFor={`toggle_${value}`}
      className={cn(
        baseItemClass,
        disabled && "pointer-events-none text-stone-400",
        className
      )}
      aria-disabled={disabled}
    >
      <input
        type="checkbox"
        id={`toggle_${value}`}
        hidden
        disabled={disabled}
        {...props}
      />
      {children}
    </label>
  );
};

ToggleGroupItem.displayName = "ToggleGroupItem";
