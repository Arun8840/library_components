"use client";
import React from "react";
import { NavRootProps } from "./nav-types";
import { cn } from "../../lib/utils";
import { NavLogo } from "./nav-logo";
import { NavList } from "./nav-list";
import { NavActions } from "./nav-actions";
import DropArea from "../../utility/Drop-area";

const baseClass =
  "w-full flex items-center justify-between px-4 py-2 gap-2 bg-white shadow-sm";
export const Navbar: React.FC<NavRootProps> = ({
  nav,
  className,
  ...props
}) => {
  const { items, logo, actions, itemPosition } = nav || {};
  return (
    <nav className={cn(baseClass, className)} {...props}>
      <NavLogo src={logo ?? ""} fallBack="ZS" />
      {items && items?.length > 0 ? (
        <NavList items={items} position={itemPosition} />
      ) : (
        <DropArea
          label="Drop navigation items here"
          className="flex-1 text-center"
        />
      )}
      {actions && actions?.length > 0 ? (
        <NavActions items={actions} />
      ) : (
        <DropArea label="Drop action items here" />
      )}
    </nav>
  );
};

Navbar.displayName = "Navbar";
