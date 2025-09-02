import React from "react";
import { DropdownTriggerProps } from "./dropdown-types";
import { cn } from "../../lib/utils";
import { useDropdownContext } from ".";

const baseClass =
  "inline-flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none w-50";

const ArrowIcon = (size: string | number) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const DropdownTrigger: React.FC<DropdownTriggerProps> = ({
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
        {ArrowIcon(18)}
      </div>
    </button>
  );
};

export default DropdownTrigger;
