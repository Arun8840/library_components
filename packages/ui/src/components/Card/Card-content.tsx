import React from "react";
import { CardDescriptionProps } from "./card-types";
import { cn } from "../../lib/utils";

const baseClass = "text-sm text-gray-500 flex-1";

export const CardContent: React.FC<CardDescriptionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn(baseClass, className)} {...props}>
      {children}
    </div>
  );
};

CardContent.displayName = "CardContent";
