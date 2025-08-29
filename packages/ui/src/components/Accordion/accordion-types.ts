import { HTMLAttributes } from "react";

export interface AccordionContainerProps
  extends HTMLAttributes<HTMLDivElement> {
  collapsible?: boolean;
  defaultOpen?: string;
}

export interface AccordionContextType {
  openItems: (string | number)[];
  toggleItem: (id: string | number) => void;
  isOpen: (id: string | number) => boolean;
}

export interface AccordionTriggerProps
  extends HTMLAttributes<HTMLButtonElement> {
  triggerId: string;
}

export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}
export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {}
