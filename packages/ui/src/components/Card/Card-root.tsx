import React from "react";
import { CardRootProps } from "./card-types";
import { cn } from "../../lib/utils";

const baseClass =
  "rounded-lg border border border-stone-200 bg-[var(--card)] p-6 shadow-md w-full flex flex-col justify-between gap-3";

const CardRoot: React.FC<CardRootProps> = ({
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

export default CardRoot;
