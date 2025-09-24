import React from "react";
import { TableHeadeTypes, TableRowTypes } from "./table-types";
import { cn } from "../../lib/utils";

const baseClass = "";
export const TableRow: React.FC<TableRowTypes> = ({ children, className }) => {
  return <tr className={cn(baseClass, className)}>{children}</tr>;
};

TableRow.displayName = "TableRow";
