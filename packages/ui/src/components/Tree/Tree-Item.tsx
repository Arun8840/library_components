import React from "react";
import { TreeItemTypes } from "./tree-types";
import { cn } from "../../lib/utils";

const baseClass = "text-sm p-1 pl-2";
export const TreeItem: React.FC<TreeItemTypes> = ({ children, className }) => {
  return <div className={cn(baseClass, className)}>{children}</div>;
};

TreeItem.displayName = "TreeItem";
