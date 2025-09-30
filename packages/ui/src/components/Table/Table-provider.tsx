"use client";
import React, { createContext, useContext, useMemo, useState } from "react";
import { TableContextType, TableProviderProps } from "./table-types";

export const TableContext = createContext<TableContextType | null>(null);

export const TableProvider: React.FC<TableProviderProps> = ({
  data,
  pageSize,
  searchKeys,
  columns = [],
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterValue, setFilterValue] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  // * for checkbox selection
  const [selected, setSelected] = useState<string[]>([]);

  // * column filter
  const [hiddenColumns, setHiddenColumns] = useState<string[]>([]);

  const filteredData = useMemo(() => {
    return data
      .filter((row: any) =>
        searchKeys.some((key: string) =>
          String(row[key]).toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
      .filter((row: any) => (filterValue ? row.status === filterValue : true));
  }, [data, searchTerm, filterValue, searchKeys]);

  const start = (page - 1) * pageSize;
  const paginatedData = filteredData.slice(start, start + pageSize);

  return (
    <TableContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        filterValue,
        setFilterValue,
        page,
        setPage,
        selected,
        setSelected,
        data: paginatedData,
        total: filteredData.length,
        pageSize,
        columns,
        hiddenColumns,
        setHiddenColumns,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export function useTable() {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("useTable must be used within a TableProvider");
  }
  return context;
}
