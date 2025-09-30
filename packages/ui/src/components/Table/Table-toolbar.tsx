"use client";
import React from "react";
import { TableToolbarProps } from "./table-types";
import { cn } from "../../lib/utils";
import { Input } from "../Input";
import { useTable } from "./Table-provider";
import { Dropdown } from "../Dropdown";
import { Check } from "lucide-react";

const baseClass = "border-b border-stone-300 py-2 flex items-center gap-5";
export const TableToolBar: React.FC<TableToolbarProps> = ({
  className,
  placeholder,
}) => {
  const {
    searchTerm,
    setSearchTerm,
    data,
    columns,
    filterValue,
    hiddenColumns,
    setHiddenColumns,
    setFilterValue,
  } = useTable();

  return (
    <div className={cn(baseClass, className)}>
      <div className="flex-1">
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e?.target?.value)}
          placeholder={placeholder}
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
    </div>
  );
};

TableToolBar.displayName = "TableToolBar";
