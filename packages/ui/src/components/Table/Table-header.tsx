import React from "react";
import { TableHeaderTypes } from "./table-types";
import { cn } from "../../lib/utils";

const baseClass = "";
export const TableHeader: React.FC<TableHeaderTypes> = ({
  children,
  className,
}) => {
  return <thead className={cn(baseClass, className)}>{children}</thead>;
};

TableHeader.displayName = "TableHeader";
