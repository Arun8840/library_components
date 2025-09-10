import { HTMLAttributes } from "react";

export interface TooltipRootProps extends HTMLAttributes<HTMLDivElement> {}

export interface TooltipTriggerProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
}

export interface TooltipContentProps extends HTMLAttributes<HTMLDivElement> {
  position?: "top" | "bottom";
}
