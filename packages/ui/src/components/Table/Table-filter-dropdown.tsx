import React from "react";
import { Dropdown } from "../Dropdown";
import { TableFilterDropdownProps } from "./table-types";

export const TableDropdown: React.FC<TableFilterDropdownProps> = ({
  keys = [],
}) => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Trigger className="border border-stone-300">
          Columns
        </Dropdown.Trigger>
        <Dropdown.Content className="min-w-full w-max">
          {keys.length === 0 ? (
            <Dropdown.Item className="px-2 py-1.5 text-sm text-gray-500">
              No columns available
            </Dropdown.Item>
          ) : (
            keys.map((key) => (
              <Dropdown.Item key={key} className="cursor-default">
                {key}
              </Dropdown.Item>
            ))
          )}
        </Dropdown.Content>
      </Dropdown>
    </div>
  );
};

TableDropdown.displayName = "TableDropdown";
