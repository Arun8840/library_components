"use client";

import React from "react";
import { TooltipTriggerProps } from "./tooltip-types";
import { cn } from "../../lib/utils";
import { useTooltipContext } from "./tooltip-root";

const baseClass =
  "inline-flex items-center cursor-pointer px-3 py-1.5 rounded-lg text-sm bg-black text-white";
export const TooltipTrigger: React.FC<TooltipTriggerProps> = ({
  className,
  children,
}) => {
  const { ref } = useTooltipContext();
  return (
    <div ref={ref} className={cn(baseClass, className)}>
      {children}
    </div>
  );
};

TooltipTrigger.displayName = "TooltipTrigger";
