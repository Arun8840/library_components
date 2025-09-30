import React from "react";
import { TableRowTypes } from "./table-types";
import { cn } from "../../lib/utils";

const baseClass = "bg-white hover:bg-stone-100/50";
export const TableRow: React.FC<TableRowTypes> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <tr className={cn(baseClass, className)} {...otherProps}>
      {children}
    </tr>
  );
};

TableRow.displayName = "TableRow";
