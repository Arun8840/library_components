import React from "react";
import { ParagraphProps } from "./paragraph-types";
import { cn } from "../../lib/utils";

const baseClass = "text-gray-900";
export const Paragraph: React.FC<ParagraphProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <p className={cn(baseClass, className)} {...props}>
      {children}
    </p>
  );
};

Paragraph.displayName = "Paragraph";
