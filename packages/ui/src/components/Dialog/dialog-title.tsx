import React from "react";
import { DialogTitleProps } from "./dialog-types";

export const DialogTitle: React.FC<DialogTitleProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <h2
      className={`text-lg font-semibold leading-tight mb-2 ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};

DialogTitle.displayName = "DialogTitle";
