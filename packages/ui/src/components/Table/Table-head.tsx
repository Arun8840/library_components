import React from "react";
import { cn } from "../../lib/utils";
import { TableHeaderTypes } from "./table-types";

const baseClass =
  "border-b border-gray-300 p-2 text-start text-stone-600 font-medium text-[15px]";
export const TableHeade: React.FC<TableHeaderTypes> = ({
  children,
  className,
}) => {
  return (
    <th className={cn(baseClass, className, "border-collapse")}>{children}</th>
  );
};

TableHeade.displayName = "TableHeade";
