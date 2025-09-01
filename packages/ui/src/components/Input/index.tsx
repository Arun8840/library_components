import React from "react";
import { InputProps } from "./input-types";
import { cn } from "../../lib/utils";
const defaultInputClass =
  "block rounded-md border border-gray-300 px-3 py-2 text-sm  placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 bg-white";

export const Input: React.FC<InputProps> = ({ className, label, ...props }) => {
  return (
    <div className="">
      <label
        htmlFor={props?.id}
        className="text-gray-700 tracking-wide text-sm"
      >
        {label}
      </label>
      <input className={cn(defaultInputClass, className)} {...props} />
    </div>
  );
};

Input.displayName = "Input";
