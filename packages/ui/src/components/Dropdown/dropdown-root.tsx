import React, { createContext, useRef, useState, useContext } from "react";
import { cn } from "../../lib/utils";
import { DropdownContextProps, DropdownRootProps } from "./dropdown-types";
import useClickOutside from "../../utility/hooks/useClick-outside";
import useWindowHeight from "../../utility/hooks/use-window-height";

const baseClass = "relative inline-block text-left rounded-xl";

const DropdownContext = createContext<DropdownContextProps | null>(null);

export const DropdownRoot: React.FC<DropdownRootProps> = ({
  className,
  children,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false));

  const windowHeight = useWindowHeight();

  const position = windowHeight > 500 ? "bottom" : "top";
  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div ref={ref} className={cn(baseClass, className)} {...props}>
        {children}
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
