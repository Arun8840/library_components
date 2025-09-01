import React from "react";
import { HeadingProps } from "./heading-types";
import { cn } from "../../lib/utils";

const baseClass = "text-2xl font-bold text-gray-900";
export const Heading: React.FC<HeadingProps> = ({
  className,
  label,
  ...props
}) => {
  return (
    <h1 className={cn(baseClass, className)} {...props}>
      {label}
    </h1>
  );
};

Heading.displayName = "Heading";
