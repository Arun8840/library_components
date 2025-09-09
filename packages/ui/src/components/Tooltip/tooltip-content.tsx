"use client";

import React from "react";
import { TooltipContentProps } from "./tooltip-types";
import { cn } from "../../lib/utils";
import { useTooltipContext } from "./tooltip-root";

const positionClasses = {
  top: "bottom-10 left-1/2 -translate-x-1/2",
  bottom: "top-10 left-1/2 -translate-x-1/2",
  left: "right-10 top-1/2 -translate-y-1/2",
  right: "left-10 top-1/2 -translate-y-1/2",
};

const baseClass =
  "absolute z-10 px-2 py-2 rounded-md bg-white text-xs shadow-lg min-w-30";
export const TooltipContent: React.FC<TooltipContentProps> = ({
  className,
  children,
  position = "top",
}) => {
  const { hovered } = useTooltipContext();
  const positionValue = positionClasses[position];
  return (
    hovered && (
      <div
        className={cn(baseClass, positionValue, className)}
        style={{ width: "fit-content" }}
      >
        {children}
      </div>
    )
  );
};

TooltipContent.displayName = "TooltipContent";
