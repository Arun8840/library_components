import React from "react";
import { TableBodyTypes } from "./table-types";
import { cn } from "../../lib/utils";

const baseClass = "";
export const TableBody: React.FC<TableBodyTypes> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <tbody {...otherProps} className={cn(baseClass, className)}>
      {children}
    </tbody>
  );
};

TableBody.displayName = "TableBody";
