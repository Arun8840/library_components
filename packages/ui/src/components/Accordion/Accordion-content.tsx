"use client";
import React from "react";
import { AccordionContentProps } from "./accordion-types";
import { cn } from "../../lib/utils";
import { useAccordionContext } from "./Accordion-root";

const baseClass = "w-full px-4 py-2 text-sm bg-white";
const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  className,
  value,
}) => {
  const { isOpen } = useAccordionContext();

  const open = isOpen(value);
  return open && <div className={cn(baseClass, className)}>{children}</div>;
};

export default AccordionContent;
