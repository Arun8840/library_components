"use client";
import React from "react";
import { Button } from "../Button";
import { DialogCloseProps } from "./dialog-types";
import { useDialogContext } from "./dialog-root";

const DialogClose: React.FC<DialogCloseProps> = ({
  children = "Close",
  className = "",
  variant = "secondary",
  ...props
}) => {
  const { closeDialog } = useDialogContext();
  return (
    <Button
      onClick={closeDialog}
      variant={variant}
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
};

export default DialogClose;
