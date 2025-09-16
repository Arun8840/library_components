import React from "react";
import { cn } from "../../lib/utils";
import { TextareaProps } from "./textarea-types";
const defaultInputClass =
  "block w-full rounded-md border border-gray-300 px-3 py-2 text-sm  placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] bg-white shadow";

export const Textarea: React.FC<TextareaProps> = ({ className, ...props }) => {
  return <textarea className={cn(defaultInputClass, className)} {...props} />;
};

Textarea.displayName = "Textarea";
