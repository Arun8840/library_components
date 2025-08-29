"use client";
import React from "react";
import { AccordionTriggerProps } from "./accordion-types";
import { cn } from "../../lib/utils";
import { useAccordionContext } from "./Accordion-root";

const baseClass =
  "w-full bg-white text-sm flex items-center justify-between px-4 py-2 border-b border-gray-200";
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

const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  children,
  className,
  triggerId,
}) => {
  const { toggleItem, isOpen } = useAccordionContext();

  return (
    <button
      onClick={() => toggleItem(triggerId)}
      className={cn(baseClass, className)}
    >
      <div>{children}</div>
      <small className={cn(isOpen(triggerId) ? "rotate-180" : "rotate-0")}>
        {ArrowIcon(18)}
      </small>
    </button>
  );
};

export default AccordionTrigger;
