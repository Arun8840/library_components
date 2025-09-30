import React from "react";
import { DropdownItemProps } from "./dropdown-types";
import { cn } from "../../lib/utils";
import { useDropdownContext } from "./dropdown-root";

const baseClass =
  "block w-full text-left px-2 py-1.5 text-sm text-gray-700 hover:bg-stone-500/10 rounded focus:outline-none";

export const DropdownItem: React.FC<DropdownItemProps> = ({
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

DropdownItem.displayName = "DropdownItem";
