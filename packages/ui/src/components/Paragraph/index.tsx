import React from "react";
import { ParagraphProps } from "./paragraph-types";
import { cn } from "../../lib/utils";

const baseClass = "text-2xl font-bold text-gray-900";
export const Paragraph: React.FC<ParagraphProps> = ({
  className,
  content,
  ...props
}) => {
  return (
    <p className={cn(baseClass, className)} {...props}>
      {content}
    </p>
  );
};

Paragraph.displayName = "Paragraph";
