import { HTMLAttributes, TableHTMLAttributes } from "react";

export interface TableRootTypes extends TableHTMLAttributes<HTMLTableElement> {}
export interface TableCaptionTypes extends HTMLAttributes<HTMLDivElement> {}
export interface TableHeaderTypes
  extends HTMLAttributes<HTMLTableSectionElement> {}
export interface TableHeadeTypes extends HTMLAttributes<HTMLTableCellElement> {}
export interface TableRowTypes extends HTMLAttributes<HTMLTableRowElement> {}
