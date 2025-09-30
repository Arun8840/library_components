import React from "react";
import { InputProps } from "./input-types";
import { cn } from "../../lib/utils";
const defaultInputClass =
  "block rounded-md border border-gray-300 px-3 py-2 text-sm  placeholder-gray-400 focus:outline-1 focus:outline-[var(--primary)]/20 bg-white shadow";

export const Input: React.FC<InputProps> = ({
  className,
  label,
  showLabel = true,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1">
      {showLabel && (
        <label
          htmlFor={props?.id}
          className="text-[var(--primary)] font-medium tracking-wide text-sm pb-2 inline-block"
        >
          {label || "Label"}
        </label>
      )}
      <input className={cn(defaultInputClass, className)} {...props} />
    </div>
  );
};

Input.displayName = "Input";
