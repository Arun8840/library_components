import React from "react";
import { DropdownItemProps } from "./dropdown-types";
import { cn } from "../../lib/utils";
import { useDropdownContext } from ".";

const baseClass =
  "block w-full text-left px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none";

const DropdownItem: React.FC<DropdownItemProps> = ({
  className,
  children,
  onClick,
  ...props
}) => {
  const ctx = useDropdownContext();

  return (
    <li
      onClick={(e) => {
        onClick?.(e);
        ctx.setOpen(false);
      }}
      className={cn(baseClass, className)}
      {...props}
    >
      {children}
    </li>
  );
};

export default DropdownItem;
