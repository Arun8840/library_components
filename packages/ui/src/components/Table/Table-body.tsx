import React from "react";
import { TableBodyProps } from "./table-types";
import { cn } from "../../lib/utils";

const baseClass = "";

export const TableBody: React.FC<TableBodyProps> = ({
  children,
  className,
}) => {
  return <tbody className={cn(baseClass, className)}>{children}</tbody>;
};

TableBody.displayName = "TableBody";
