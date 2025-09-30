import { ButtonHTMLAttributes, HTMLAttributes } from "react";

export type DropdownItemType = {
  key: string | number;
  value: string;
};

export interface DropdownRootProps extends HTMLAttributes<HTMLDivElement> {}

export interface DropdownTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export interface DropdownContentProps extends HTMLAttributes<HTMLUListElement> {
  position?: "top" | "bottom";
}

export interface DropdownItemProps extends HTMLAttributes<HTMLLIElement> {}

export interface DropdownContextProps {
  open: boolean;
  setOpen: (v: boolean) => void;
}
