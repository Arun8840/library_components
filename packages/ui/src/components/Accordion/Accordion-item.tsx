"use client";
import React from "react";
import { AccordionItemProps } from "./accordion-types";

const AccordionItem: React.FC<AccordionItemProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default AccordionItem;
