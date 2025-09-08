import React, { HtmlHTMLAttributes } from "react";
import { cn } from "../lib/utils";

interface DropAreaProps extends HtmlHTMLAttributes<HTMLDivElement> {
  label: string;
}

const baseClass = "border border-dashed border-gray-300 p-1";
const DropArea: React.FC<DropAreaProps> = ({ className, label }) => {
  return (
    <div className={cn(baseClass, className)}>
      <small>{label}</small>
    </div>
  );
};

export default DropArea;
