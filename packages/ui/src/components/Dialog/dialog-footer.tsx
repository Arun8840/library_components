"use client";
import React from "react";
import { DialogFooterProps } from "./dialog-types";

export const DialogFooter: React.FC<DialogFooterProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`flex items-center justify-end gap-2 mt-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

DialogFooter.displayName = "DialogFooter";
