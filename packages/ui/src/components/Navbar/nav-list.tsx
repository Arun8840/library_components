"use client";
import React from "react";
import { NavListProps } from "./nav-types";
import { cn } from "../../lib/utils";
import { NavItem } from "./nav-item";

const positions = {
  right: "justify-end",
  left: "justify-start",
  center: "justify-center",
};
const baseClass = "flex gap-2 justify-center items-center flex-1";
export const NavList: React.FC<NavListProps> = ({
  items,
  className,
  position = "center",
}) => {
  const positionValue = positions[position];
  return (
    <ul className={cn(baseClass, positionValue, className)}>
      {items?.map((item, itemIndex) => {
        return (
          <NavItem key={`${item?.label}_${itemIndex}`} href={item?.href}>
            {item?.label}
          </NavItem>
        );
      })}
    </ul>
  );
};
