import React from "react";
import { cn } from "../../lib/utils";
import { NavItem } from "./nav-item";
import { NavListProps } from "./nav-types";

const baseClass = "flex gap-2 justify-center items-center";
export const NavActions: React.FC<
  Pick<NavListProps, "items"> & { className?: string }
> = ({ items, className }) => {
  if (!items || items.length === 0) return null;
  return (
    <ul className={cn(baseClass, className)}>
      {items.map((item, itemIndex) => (
        <NavItem
          key={`${item?.label}_${itemIndex}`}
          href={item?.href}
          variant={item?.variant}
        >
          {item?.label}
        </NavItem>
      ))}
    </ul>
  );
};
