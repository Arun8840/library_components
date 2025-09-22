"use client";

import React from "react";
import { TreeGroupTypes } from "./tree-types";
import { cn } from "../../lib/utils";
import { ChevronDown } from "lucide-react";
import { useTreeContext } from "./Tree-root";

const baseClass = "group";
export const TreeGroup: React.FC<TreeGroupTypes> = ({
  children,
  className,
  groupLabel,
  icon,
  ...Otherprops
}) => {
  const ChildrenItems = React.Children.map(children, (child) => {
    if (
      React.isValidElement(child) &&
      (child.type as any).displayName === "TreeItem"
    ) {
      return child;
    }
    return null;
  });

  const { isOpen, toggleItem } = useTreeContext();

  const isGroupOpen = isOpen(groupLabel);
  return (
    <div
      data-groupopen={isGroupOpen}
      className={cn(baseClass, className)}
      {...Otherprops}
    >
      <div className="flex items-center gap-2 w-fit select-none">
        <ChevronDown
          onClick={() => toggleItem(groupLabel)}
          className="-rotate-90 group-data-[groupOpen=true]:rotate-0 transition-transform"
          size={16}
        />
        <div className="flex items-center gap-1">
          {icon && React.createElement(icon)}
          <h1 className="p-1 pl-0 text-sm text-[var(--muted-foreground)] group-data-[groupOpen=true]:text-[var(--primary)]">
            {groupLabel}
          </h1>
        </div>
      </div>
      <div className="pl-1.5 ml-2 border-l border-gray-400 hidden group-data-[groupOpen=true]:block">
        {ChildrenItems}
      </div>
    </div>
  );
};

TreeGroup.displayName = "TreeGroup";
