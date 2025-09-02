import React from "react";
import { DropdownContentProps } from "./dropdown-types";
import { cn } from "../../lib/utils";
import { useDropdownContext } from ".";

const baseClass =
  "absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg focus:outline-none";

const DropdownContent: React.FC<DropdownContentProps> = ({
  className,
  children,
  ...props
}) => {
  const ctx = useDropdownContext();

  if (!ctx?.open) return null;

  return (
    <ul className={cn(baseClass, className)} {...props}>
      {children}
    </ul>
  );
};

export default DropdownContent;
