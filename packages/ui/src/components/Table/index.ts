import { TableBody } from "./Table-body";
import { TableCaption } from "./Table-caption";
import { TableCell } from "./Table-cell";
import { TableHeade } from "./Table-head";
import { TableHeader } from "./Table-header";
import TableRoot from "./Table-root";
import { TableRow } from "./Table-row";

const Table = Object.assign(TableRoot, {
  Caption: TableCaption,
  Header: TableHeader,
  Head: TableHeade,
  Row: TableRow,
  Body: TableBody,
  Cell: TableCell,
});

export { Table };
