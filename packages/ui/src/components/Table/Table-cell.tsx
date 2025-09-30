import { cn } from "../../lib/utils";
import { TableCellTypes } from "./table-types";

const baseClass = "p-2 text-sm border-b last:text-end border-gray-300";
export const TableCell: React.FC<TableCellTypes> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <td className={cn(baseClass, className)} {...otherProps}>
      {children}
    </td>
  );
};

TableCell.displayName = "TableCell";
