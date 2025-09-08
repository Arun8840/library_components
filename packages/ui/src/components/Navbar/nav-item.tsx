"use client";
import React from "react";
import { cn } from "../../lib/utils";
import { NavLinkProps } from "./nav-types";

const baseClass =
  "inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors";

const variantClasses: Record<string, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700",
  outline:
    "border border-gray-300 text-gray-900 bg-transparent hover:bg-gray-100",
  none: "",
};

export const NavItem: React.FC<NavLinkProps> = ({
  href,
  className,
  children,
  variant = "",
  ...otherProps
}) => {
  const variantClass = variant ? variantClasses[variant] || "" : "";
  return (
    <a
      href={href}
      className={cn(baseClass, variantClass, className)}
      {...otherProps}
    >
      {children}
    </a>
  );
};
