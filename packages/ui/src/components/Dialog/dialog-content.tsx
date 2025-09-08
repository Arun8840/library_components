"use client";
import React, { useRef } from "react";
import { DialogContentProps } from "./dialog-types";
import { cn } from "../../lib/utils";
import { useDialogContext } from "./dialog-root";
import useClickOutside from "../../utility/hooks/useClick-outside";

const baseClass =
  "bg-black/10 p-2 fixed inset-0 size-full grid place-items-center ";
export const DialogContent: React.FC<DialogContentProps> = ({
  children,
  className,
  ...otherProps
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const { open, closeDialog } = useDialogContext();
  useClickOutside(rootRef, () => closeDialog());
  return (
    open && (
      <div className={cn(baseClass, className)} {...otherProps}>
        <div
          ref={rootRef}
          className="bg-white max-w-xl p-4 rounded-lg shadow-lg"
        >
          {children}
        </div>
      </div>
    )
  );
};

DialogContent.displayName = "DialogContent";
