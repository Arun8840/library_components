import React from "react";
import { TableHeadProps } from "./table-types";
import { cn } from "../../lib/utils";

const baseClass =
  "text-start last:text-end text-stone-700 text-[14px] font-medium p-2 capitalize";
export const TableHead: React.FC<TableHeadProps> = ({
  children,
  className,
}) => {
  return <th className={cn(baseClass, className)}>{children}</th>;
};

TableHead.displayName = "TableHead";
