import React from "react";
import { TableRootTypes } from "./table-types";
import { cn } from "../../lib/utils";

const baseClass = "w-full";
const TableRoot: React.FC<TableRootTypes> = ({ children, className }) => {
  // Separate Table.Caption from other children
  const childrenArray = React.Children.toArray(children);
  const captionChildren = childrenArray.filter(
    (child: any) => child?.type?.displayName === "TableCaption"
  );
  const otherChildren = childrenArray.filter(
    (child: any) => child?.type?.displayName !== "TableCaption"
  );

  return (
    <div>
      <div>{captionChildren}</div>
      <table className={cn(baseClass, className)}>{otherChildren}</table>
    </div>
  );
};

export default TableRoot;
