import React from "react";
import { DropdownContentProps } from "./dropdown-types";
import { cn } from "../../lib/utils";
import { useDropdownContext } from ".";

const baseClass =
  "absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[var(--card)] shadow-lg focus:outline-none";

const positionClass = {
  bottom: "top-full mt-2",
  top: "bottom-full mb-2",
};

const DropdownContent: React.FC<DropdownContentProps> = ({
  className,
  children,
  position = "bottom",
  ...props
}) => {
  const ctx = useDropdownContext();

  if (!ctx?.open) return null;

  return (
    <ul
      className={cn(baseClass, positionClass[position], className)}
      {...props}
    >
      {children}
    </ul>
  );
};

export default DropdownContent;
