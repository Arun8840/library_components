import React, { HTMLAttributes, TableHTMLAttributes } from "react";

// Root table props
export interface TableRootTypes extends TableHTMLAttributes<HTMLTableElement> {}

// Caption for the table
export interface TableCaptionTypes extends HTMLAttributes<HTMLDivElement> {}

// Table header section (thead)
export interface TableHeaderTypes
  extends HTMLAttributes<HTMLTableSectionElement> {}

// Table head cell (th)
export interface TableHeadTypes extends HTMLAttributes<HTMLTableCellElement> {}

// Table row (tr)
export interface TableRowTypes extends HTMLAttributes<HTMLTableRowElement> {}

// Table body section (tbody)
export interface TableBodyTypes
  extends HTMLAttributes<HTMLTableSectionElement> {}

// Table cell (td)
export interface TableCellTypes extends HTMLAttributes<HTMLTableCellElement> {}

// Props for the search/filter bar container
export interface TableFilterProps extends HTMLAttributes<HTMLDivElement> {}

// Props for the search input
export interface TableSearchProps {
  className?: string;
  children?: React.ReactNode;
}

// Props for dropdown filter
export interface TableFilterDropdownProps {
  keys: string[];
  className?: string;
}

// Props for search input inside filter
export interface TableFilterSearchProps {
  searchKeys: string[];
  placeholder?: string;
  className?: string;
}
