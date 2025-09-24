import React from "react";
import { TableHeadeTypes } from "./table-types";
import { cn } from "../../lib/utils";

const baseClass = "border p-2 text-stone-600 font-medium text-[15px]";
export const TableHeade: React.FC<TableHeadeTypes> = ({
  children,
  className,
}) => {
  return (
    <th className={cn(baseClass, className, "border-collapse")}>{children}</th>
  );
};

TableHeade.displayName = "TableHeade";
