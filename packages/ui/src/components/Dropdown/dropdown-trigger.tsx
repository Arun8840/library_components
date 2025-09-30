import React from "react";
import { DropdownTriggerProps } from "./dropdown-types";
import { cn } from "../../lib/utils";
import { useDropdownContext } from "./dropdown-root";
import { ChevronDown } from "lucide-react";

const baseClass =
  "inline-flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-1 focus:outline-[var(--primary)]/20 bg-white hover:bg-[var(--muted)] disabled:opacity-50 disabled:pointer-events-none w-full";

export const DropdownTrigger: React.FC<DropdownTriggerProps> = ({
  className,
  children,
  ...props
}) => {
  const ctx = useDropdownContext();

  return (
    <button
      onClick={() => ctx.setOpen(!ctx.open)}
      className={cn(baseClass, className)}
      {...props}
    >
      {children}
      <div
        data-open={ctx?.open}
        className="size-fit transition-transform duration-200 data-[open=true]:rotate-180 origin-center"
      >
        <ChevronDown size={18} />
      </div>
    </button>
  );
};

DropdownTrigger.displayName = "DropdownTrigger";
