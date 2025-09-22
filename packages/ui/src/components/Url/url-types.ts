import { AnchorHTMLAttributes, HTMLAttributes } from "react";

export interface UrlProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: string;
  rel?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
