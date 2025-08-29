import React from "react";
import { CardTitleProps } from "./card-types";
import { cn } from "../../lib/utils";

const baseClass = "text-lg font-semibold leading-none tracking-tight";

export const CardTitle: React.FC<CardTitleProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h1 className={cn(baseClass, className)} {...props}>
      {children}
    </h1>
  );
};

CardTitle.displayName = "CardTitle";
