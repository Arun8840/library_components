import React from "react";
import { TableRowProps } from "./table-types";
import { cn } from "../../lib/utils";

const baseClass = "hover:bg-stone-300/20 transition-colors";
export const TableRow: React.FC<TableRowProps> = ({ children, className }) => {
  return <tr className={cn(baseClass, className)}>{children}</tr>;
};

TableRow.displayName = "TableRow";
