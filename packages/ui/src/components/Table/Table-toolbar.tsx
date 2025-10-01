"use client";
import React from "react";
import { TableToolbarProps } from "./table-types";
import { cn } from "../../lib/utils";

const baseClass = "border-b border-stone-300 py-2 flex items-center gap-5";
export const TableToolBar: React.FC<TableToolbarProps> = ({
  className,
  children,
}) => {
  return <div className={cn(baseClass, className)}>{children}</div>;
};

TableToolBar.displayName = "TableToolBar";
