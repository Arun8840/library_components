import { AnchorHTMLAttributes, HTMLAttributes, ImgHTMLAttributes } from "react";
import { ButtonVariant } from "../Button/button-types";

export type NavItemType = {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  children?: NavItemType[];
  variant?: ButtonVariant;
  [key: string]: any;
};

type NavLinkPosition = "left" | "center" | "right";
export type NavActionType = {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  href?: string;
  [key: string]: any;
};

export interface NavRootProps extends HTMLAttributes<HTMLDivElement> {
  nav: {
    items: NavItemType[];
    logo?: string | null;
    actions?: NavActionType[];
    itemPosition?: NavLinkPosition;
  };
}

export interface NavListProps extends HTMLAttributes<HTMLUListElement> {
  items: NavItemType[];
  position?: NavLinkPosition;
}

export interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
}

export interface NavLogoProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallBack?: string;
}
