"use client";

import React from "react";
import { ToggleGroupProps } from "./toggle-types";
import { cn } from "../../lib/utils";
import useWindowHeight from "../../utility/hooks/use-window-height";

const variantClass = {
  outline: "border border-stone-400/40 divide-x divide-stone-400/40",
  default: "border border-stone-400/40",
};
const baseClass = "flex w-fit items-center shadow rounded-md bg-muted";

const ToggleRoot: React.FC<ToggleGroupProps> = ({
  children,
  className,
  variant = "default",
}) => {
  const variantValue = variantClass[variant] || variantClass.default;

  return (
    <div className={cn(baseClass, variantValue, className)}>{children}</div>
  );
};

export default ToggleRoot;
