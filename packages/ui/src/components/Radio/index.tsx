"use client";

import React from "react";
import { RadioProps } from "./radio-type";
import { cn } from "../../lib/utils";

// Tailwind classes for label and input
const labelClass =
  "flex flex-col gap-1 text-sm font-medium text-gray-700 p-2 has-checked:bg-[var(--primary)]/10 has-checked:ring has-checked:ring-[var(--primary)] rounded-lg";
const baseInputClass =
  "size-4 accent-[var(--primary)] rounded border-gray-300 ";

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    { className, children, inputClass, id, label, description, ...props },
    ref
  ) => {
    const isDisabled = props?.disabled;
    const flagClass = isDisabled ? "opacity-50 cursor-not-allowed" : "";
    return (
      <label className={cn(labelClass, className, flagClass)}>
        <span className="flex items-center gap-2">
          <input
            type="radio"
            {...props}
            id={id}
            ref={ref}
            className={cn(baseInputClass, inputClass)}
            disabled={isDisabled}
          />
          {label && (
            <span className="select-none" id={id ? `${id}-label` : undefined}>
              {label}
            </span>
          )}
        </span>
        {description && <p className="text-gray-500 pt-1">{description}</p>}
      </label>
    );
  }
);

Radio.displayName = "Radio";
