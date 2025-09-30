import React from "react";
import { cn } from "../../lib/utils";
import { TableContainerProps } from "./table-types";

const baseClass = "w-full";
const TableRoot: React.FC<TableContainerProps> = ({ children, className }) => {
  return <table className={cn(baseClass, className)}>{children}</table>;
};

export default TableRoot;
