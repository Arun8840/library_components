"use client";
import React, { createContext } from "react";
import { TableRootTypes } from "./table-types";
import { cn } from "../../lib/utils";

const baseClass = "w-full border border-red-500 bg-white";

const TableRoot: React.FC<TableRootTypes> = ({ children, className }) => {
  // Efficiently separate TableCaption, TableSearch, and other children in a single pass
  const captionChildren: React.ReactNode[] = [];
  const searchBar: React.ReactNode[] = [];
  const otherChildren: React.ReactNode[] = [];

  React.Children.forEach(children, (child: any) => {
    const displayName = child?.type?.displayName;
    switch (displayName) {
      case "TableCaption":
        captionChildren.push(child);
        break;
      case "TableFilter":
        searchBar.push(child);
        break;
      default:
        otherChildren.push(child);
        break;
    }
  });

  return (
    <div className="w-full flex flex-col gap-2">
      {captionChildren && <div>{captionChildren}</div>}
      {searchBar && <>{searchBar}</>}
      <div className="w-full">
        <table className={cn(baseClass, className)}>{otherChildren}</table>
      </div>
    </div>
  );
};

export default TableRoot;
