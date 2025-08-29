import React from "react";
import { CardRootProps } from "./card-types";
import { cn } from "../../lib/utils";

const baseClass =
  "rounded-lg border border border-stone-200 bg-white p-6 shadow-sm w-full flex flex-col gap-3";

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
