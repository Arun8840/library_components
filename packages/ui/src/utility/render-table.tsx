"use client";
import { Logs } from "lucide-react";
import { Checkbox } from "../components/Checkbox";
import { Table, useTable } from "../components/Table";

const RenderTable = () => {
  const { data, hiddenColumns, columns } = useTable();

  return (
    <>
      <Table.Toolbar placeholder="Search email..." />

      <Table>
        {/* //* header */}
        <Table.Header>
          <Table.Row>
            <Table.Heade>Sort</Table.Heade>
            <Table.Heade>Select</Table.Heade>
            {columns?.map((column, columnIndex) => {
              const selected = !hiddenColumns?.includes(column);
              return (
                selected && (
                  <Table.Heade key={columnIndex}>{column}</Table.Heade>
                )
              );
            })}
          </Table.Row>
        </Table.Header>

        {/* //* body */}
        <Table.Body>
          {data?.map((user) => {
            return (
              <Table.Row key={user?.id}>
                <Table.Cell>
                  <Logs size={18} color="gray" />
                </Table.Cell>
                <Table.Cell className="last:flex last:justify-end">
                  <Checkbox className="size-fit has-checked:ring-0 p-1 rounded" />
                </Table.Cell>

                {columns
                  .filter((col: string) => !hiddenColumns.includes(col))
                  .map((col: string, colIndex) => (
                    <Table.Cell key={colIndex}>{user[col]}</Table.Cell>
                  ))}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>

      <Table.Pagination className="bg-gray-50" />
    </>
  );
};

export default RenderTable;
