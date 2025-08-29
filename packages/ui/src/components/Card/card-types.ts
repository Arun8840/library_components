import { ButtonHTMLAttributes, HTMLAttributes } from "react";

export interface CardRootProps extends HTMLAttributes<HTMLDivElement> {}
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}
export interface CardDescriptionProps extends HTMLAttributes<HTMLDivElement> {}
export interface CardActionProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}
