import React from "react";
import { TableCellProps } from "./table-types";
import { cn } from "../../lib/utils";

const baseClass = "border-b border-stone-300 p-1.5 text-[14px] last:text-end";

export const TableCell: React.FC<TableCellProps> = ({
  children,
  className,
}) => {
  return <td className={cn(baseClass, className)}>{children}</td>;
};

TableCell.displayName = "TableCell";
