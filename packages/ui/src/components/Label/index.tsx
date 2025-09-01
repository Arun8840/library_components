"use client";
import React from "react";
import { LabelProps } from "./label-type";
import { cn } from "../../lib/utils";

const baseClass = "text-sm font-medium text-gray-700";
export const Label: React.FC<LabelProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <label className={cn(baseClass, className)} {...props}>
      {children}
    </label>
  );
};

Label.displayName = "Label";
