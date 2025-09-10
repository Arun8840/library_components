"use client";

import React from "react";
import { TooltipContentProps } from "./tooltip-types";
import { cn } from "../../lib/utils";
import { useTooltipContext } from "./tooltip-root";

const positionClasses = {
  top: "bottom-10 left-1/2 -translate-x-1/2 before:content-[''] before:absolute before:w-2.5 before:h-2.5 before:bg-white before:rotate-45 before:shadow-lg before:-z-10 before:left-1/2 before:-translate-x-1/2 before:-bottom-1.5 border border-gray-300 before:border-b before:border-r before:border-gray-300",
  bottom:
    "top-10 left-1/2 -translate-x-1/2 before:content-[''] before:absolute before:w-2.5 before:h-2.5 before:bg-white before:rotate-45 before:shadow-lg before:-z-10 before:left-1/2 before:-translate-x-1/2 before:-top-1.5 border border-gray-300 before:border-t before:border-l before:border-gray-300",
};

const baseClass =
  "absolute z-10 px-2 py-2 rounded-md bg-white text-xs shadow-lg min-w-30 "; // pointer for top position
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
