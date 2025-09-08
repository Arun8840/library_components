import React from "react";
import { DialogDescriptionProps } from "./dialog-types";

export const DialogDescription: React.FC<DialogDescriptionProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <p className={`text-gray-600 text-base mb-4 ${className}`} {...props}>
      {children}
    </p>
  );
};

DialogDescription.displayName = "DialogDescription";
