import React from "react";
import { CardRootProps } from "./card-types";
import { cn } from "../../lib/utils";

const baseClass = "flex flex-col gap-2";

export const CardFooter: React.FC<CardRootProps> = ({
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

CardFooter.displayName = "CardFooter";
