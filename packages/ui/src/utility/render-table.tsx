"use client";
import { Check, Logs } from "lucide-react";
import { Checkbox } from "../components/Checkbox";
import { Table, useTable } from "../components/Table";
import { Input } from "../components/Input";
import { Dropdown } from "../components/Dropdown";

const RenderTable = () => {
  const {
    data,
    hiddenColumns,
    columns,
    searchTerm,
    setSearchTerm,
    setHiddenColumns,
    filterValue,
    setFilterValue,
  } = useTable();

  return (
    <>
      <Table.Toolbar>
        <div className="flex-1">
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e?.target?.value)}
            placeholder={"Search Email ..."}
            showLabel={false}
            className="w-1/2"
          />
        </div>

        <div>
          <Dropdown>
            <Dropdown.Trigger className="border border-stone-300 min-w-50">
              Columns
            </Dropdown.Trigger>
            <Dropdown.Content>
              {columns.map((col, idx) => {
                const checked = hiddenColumns?.includes(col);
                return (
                  <Dropdown.Item
                    onClick={(e) => {
                      if (col) {
                        setHiddenColumns((prev: string[]) =>
                          prev.includes(col)
                            ? prev.filter((c) => c !== col)
                            : [...prev, col]
                        );
                      }
                    }}
                    key={idx}
                  >
                    <div className="flex items-center gap-2">
                      <Check
                        data-checked={checked}
                        size={18}
                        className="invisible data-[checked=true]:visible"
                      />
                      <span className="flex-1 capitalize">{col}</span>
                    </div>
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Content>
          </Dropdown>
        </div>

        <div>
          <Dropdown>
            <Dropdown.Trigger className="border border-stone-300 min-w-50 capitalize">
              {filterValue || "Select"}
            </Dropdown.Trigger>
            <Dropdown.Content>
              <Dropdown.Item onClick={() => setFilterValue("active")}>
                Active
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setFilterValue("inactive")}>
                InActive
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setFilterValue("")}>
                Reset
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
        </div>
      </Table.Toolbar>

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
