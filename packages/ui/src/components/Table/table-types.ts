import React, { Dispatch, SetStateAction, TableHTMLAttributes } from "react";

export interface TableProviderProps {
  data: Record<string, string>[];
  pageSize: number;
  searchKeys: string[];
  children: React.ReactNode;
  columns?: string[];
}

export interface TableContainerProps
  extends TableHTMLAttributes<HTMLTableElement> {}

export interface TableToolbarProps {
  className?: string;
  children?: React.ReactNode;
}

export interface TableHeaderProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

export interface TableHeadProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {}

export interface TableBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

export interface TableCellProps
  extends React.TdHTMLAttributes<HTMLTableCellElement> {}

export interface TableContextType {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  filterValue: string;
  setFilterValue: Dispatch<SetStateAction<string>>;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
  data: any[];
  total: number;
  pageSize: number;
  columns: string[];
  hiddenColumns: string[];
  setHiddenColumns: Dispatch<SetStateAction<string[]>>;
}
