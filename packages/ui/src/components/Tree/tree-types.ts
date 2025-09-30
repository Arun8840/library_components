import React, { HTMLAttributes } from "react";
export interface TreeRootTypes extends HTMLAttributes<HTMLDivElement> {
  defaultOpen?: string;
  collapsible?: boolean;
}

export interface TreeGroupTypes extends HTMLAttributes<HTMLDivElement> {
  groupLabel: string;
  icon?: React.ComponentType<import("lucide-react").LucideIcon>;
}
export interface TreeItemTypes extends HTMLAttributes<HTMLDivElement> {}

export interface UseTreeReturn {
  openItems: (string | number)[];
  toggleItem: (id: string | number) => void;
  isOpen: (id: string | number) => boolean;
}
