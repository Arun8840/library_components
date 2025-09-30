import { TableBody } from "./Table-body";
import { TableCell } from "./Table-cell";
import { TableHeader } from "./Table-header";
import { TableToolBar } from "./Table-toolbar";
import { TableHead } from "./Table-Head";
import TableRoot from "./Table-root";
import { TableProvider, useTable } from "./Table-provider";
import { TableRow } from "./Table-row";
import { TablePagination } from "./Table-pagination";

const Table = Object.assign(TableRoot, {
  Header: TableHeader,
  Heade: TableHead,
  Row: TableRow,
  Body: TableBody,
  Toolbar: TableToolBar,
  Cell: TableCell,
  Pagination: TablePagination,
});

export { Table, TableProvider, useTable };
