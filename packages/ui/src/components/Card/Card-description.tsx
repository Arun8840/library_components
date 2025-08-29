import React from "react";
import { CardDescriptionProps } from "./card-types";
import { cn } from "../../lib/utils";

const baseClass = "text-sm text-gray-500";

export const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p className={cn(baseClass, className)} {...props}>
      {children}
    </p>
  );
};

CardDescription.displayName = "CardDescription";
