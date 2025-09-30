import React from "react";
import { TableCaptionTypes } from "./table-types";
import { cn } from "../../lib/utils";

const baseClass = "text-sm py-2";
export const TableCaption: React.FC<TableCaptionTypes> = ({
  children,
  className,
}) => {
  return <div className={cn(baseClass, className)}>{children}</div>;
};

TableCaption.displayName = "TableCaption";
