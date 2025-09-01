import React from "react";
import { ProgressProps } from "./progress-bar-types";
import { cn } from "../../lib/utils";

const baseClass =
  "w-full h-3 rounded-lg overflow-hidden bg-gray-200 [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-value]:bg-blue-500 [&::-webkit-progress-value]:rounded-lg [&::-moz-progress-bar]:bg-blue-500 aria-disabled:opacity-70";

export const Progress: React.FC<ProgressProps> = ({
  className,
  label = null,
  disabled,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <small
          aria-disabled={disabled}
          className="text-gray-700 py-2 aria-disabled:opacity-70 aria-disabled:cursor-not-allowed"
        >
          {label}
        </small>
      )}
      <progress
        aria-disabled={disabled}
        className={cn(baseClass, className)}
        {...props}
      />
    </div>
  );
};

Progress.displayName = "Progress";
