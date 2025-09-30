import React from "react";
import { TableSearchProps } from "./table-types";
import { cn } from "../../lib/utils";

const baseClass = "flex items-center gap-5";
export const TableFilter: React.FC<TableSearchProps> = ({
  className,
  children,
}) => {
  return <div className={cn(baseClass, className)}>{children}</div>;
};

TableFilter.displayName = "TableFilter";
