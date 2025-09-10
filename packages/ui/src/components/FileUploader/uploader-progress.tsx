"use client";
import React from "react";
import { UploaderProgressProps } from "./uploader-types";
import { cn } from "../../lib/utils";
import { useUploaderContext } from "./uploader-root";

const baseClass =
  "w-full h-2 rounded-full overflow-hidden [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-value]:bg-green-500 [&::-moz-progress-bar]:bg-blue-500 transition-all";

export const UploaderProgress: React.FC<UploaderProgressProps> = ({
  className,
  value = 0,
  max = 100,
  label,
}) => {
  const { file, progress, status } = useUploaderContext();

  if (!file) return null;

  // Ensure value and max are numbers and avoid division by zero
  const safeValue = typeof progress === "number" ? progress : 0;
  const safeMax = typeof max === "number" && max > 0 ? max : 100;

  return (
    <div className="w-full flex flex-col gap-1">
      {status === "uploading" && (
        <progress
          className={cn(baseClass, className)}
          value={safeValue}
          max={safeMax}
          aria-label={label}
        />
      )}
    </div>
  );
};

UploaderProgress.displayName = "UploaderProgress";
