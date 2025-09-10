"use client";

import React from "react";
import { UploaderActionProps } from "./uploader-types";
import { cn } from "../../lib/utils";
import { useUploaderContext } from "./uploader-root";
import { useFileSizeConverter } from "./hook/use-file-size-converter";

const baseClass =
  "inline-flex items-center justify-center px-3 py-1.5 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors has-disabled:opacity-30 has-disabled:pointer-events-none w-fit";

export const UploaderAction: React.FC<UploaderActionProps> = ({
  className,
  children,
  disabled,
  ...otherProps
}) => {
  // Create a random focus id for the input and label without using state
  const focusId = `uploader-action-${Math.random().toString(36).slice(2, 10)}`;

  const { file, onFileChange, accept } = useUploaderContext();
  const { formatFileSize } = useFileSizeConverter();

  return (
    <div className="flex items-center flex-wrap justify-between">
      <label className={cn(baseClass, className)} htmlFor={focusId}>
        <input
          accept={accept as string | undefined}
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              onFileChange(e.target.files[0]);
            }
          }}
          type="file"
          hidden
          id={focusId}
          disabled={disabled}
          {...otherProps}
        />
        {children}
      </label>

      <div className="flex items-center gap-2">
        <small className="text-gray-600">
          {file ? file.name : "No file selected"}
        </small>
        {file && (
          <small className="text-xs bg-green-400/20 text-green-600 px-1 py-0.5 rounded-full">
            {formatFileSize(file?.size || 0)}
          </small>
        )}
      </div>
    </div>
  );
};

UploaderAction.displayName = "UploaderAction";
