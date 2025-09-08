"use client";
import React, { createContext, useContext, useRef } from "react";
import { DialogRootProps } from "./dialog-types";
import { useDialog } from "./hook/use-dialog-hook";

// Create the Dialog context
export const DialogContext = createContext<
  ReturnType<typeof useDialog> | undefined
>(undefined);

// Custom hook to use the Dialog context
export function useDialogContext() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialogContext must be used within a DialogRoot");
  }
  return context;
}

const DialogRoot: React.FC<DialogRootProps> = ({
  children,
  className,
  open: defaultOpen = false,
  onOpenChange,
  ...otherProps
}) => {
  const dialog = useDialog(defaultOpen, onOpenChange);

  return (
    <DialogContext.Provider value={dialog}>
      <div className={className} {...otherProps}>
        {children}
      </div>
    </DialogContext.Provider>
  );
};

export default DialogRoot;
