"use client";

import React, { createContext, useContext } from "react";
import { useHover } from "../../utility/hooks/use-hover";
import { TooltipRootProps } from "./tooltip-types";
import { cn } from "../../lib/utils";

const baseClass = "relative inline-block";

type TooltipContextType = {
  hovered: boolean;
  ref: React.RefObject<HTMLDivElement> | ((node: HTMLDivElement) => void);
};

const TooltipContext = createContext<TooltipContextType | null>(null);

export const useTooltipContext = () => {
  const ctx = useContext(TooltipContext);
  if (!ctx) throw new Error("Tooltip components must be inside <TooltipRoot>");
  return ctx;
};

const TooltipRoot: React.FC<TooltipRootProps> = ({ children, className }) => {
  const { hovered, ref } = useHover();

  return (
    <TooltipContext.Provider
      value={{ hovered, ref: ref as React.RefObject<HTMLDivElement> }}
    >
      <div className={cn(baseClass, className)}>{children}</div>
    </TooltipContext.Provider>
  );
};

export default TooltipRoot;
