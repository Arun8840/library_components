"use client";

import React, { createContext, useContext } from "react";
import {
  AccordionContainerProps,
  AccordionContextType,
} from "./accordion-types";
import { useAccordion } from "./useAccordion";

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context)
    throw new Error("Accordion components must be used within Accordion");
  return context;
};

const AccordionRoot: React.FC<AccordionContainerProps> = ({
  children,
  collapsible = false,
  defaultOpen = "",
  ...props
}) => {
  const accordion = useAccordion(collapsible, defaultOpen);

  return (
    <AccordionContext.Provider value={accordion}>
      <div {...props}>{children}</div>
    </AccordionContext.Provider>
  );
};

export default AccordionRoot;
