"use client";
import React, { createContext, useRef, useState, useContext } from "react";
import { cn } from "../../lib/utils";
import DropdownTrigger from "./dropdown-trigger";
import DropdownContent from "./dropdown-content";
import { DropdownContextProps, DropdownRootProps } from "./dropdown-types";
import DropdownItem from "./dropdown-item";
import useClickOutside from "../../utility/hooks/useClick-outside";
import useWindowHeight from "../../utility/hooks/use-window-height";

const baseClass = "relative inline-block text-left rounded-xl";

const DropdownContext = createContext<DropdownContextProps | null>(null);

export const Dropdown: React.FC<DropdownRootProps> = ({
  className,
  children,
  data,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { items, placeholder, disabled = false } = data;
  useClickOutside(ref, () => setOpen(false));

  const windowHeight = useWindowHeight();

  const position = windowHeight > 500 ? "bottom" : "top";
  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div ref={ref} className={cn(baseClass, className)} {...props}>
        <DropdownTrigger disabled={disabled}>
          {placeholder ?? "Select"}
        </DropdownTrigger>
        <DropdownContent position={position}>
          {items.map((item) => (
            <DropdownItem key={item.key}>{item.value}</DropdownItem>
          ))}
        </DropdownContent>
      </div>
    </DropdownContext.Provider>
  );
};

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error(
      "useDropdownContext must be used within a DropdownContext.Provider"
    );
  }
  return context;
};
