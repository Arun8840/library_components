import React from "react";
import { TableHeaderProps } from "./table-types";
import { cn } from "../../lib/utils";

const baseClass = "border-b border-stone-300";
export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  className,
}) => {
  return <thead className={cn(baseClass, className)}>{children}</thead>;
};

TableHeader.displayName = "TableHeader";
