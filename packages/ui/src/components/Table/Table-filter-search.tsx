import React from "react";
import { Input } from "../Input";
import { TableFilterSearchProps } from "./table-types";

export const TableSearch: React.FC<TableFilterSearchProps> = ({
  searchKeys,
  placeholder,
}) => {
  return (
    <div className="flex-1">
      <Input placeholder={placeholder} showLabel={false} className="flex-1 " />
    </div>
  );
};

TableSearch.displayName = "TableSearch";
