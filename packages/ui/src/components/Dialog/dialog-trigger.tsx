"use client";
import React from "react";
import { cn } from "../../lib/utils";
import { DialogTriggerProps } from "./dialog-types";
import { useDialogContext } from "./dialog-root";

const variantKey = {
  primary:
    "bg-stone-900 text-white hover:bg-stone-950 px-3 py-1.5 text-sm rounded-lg transition-colors duration-100 cursor-pointer",
  secondary:
    "bg-gray-200 text-gray-900 hover:bg-gray-300 px-3 py-1.5 text-sm rounded-lg transition-colors duration-100 cursor-pointer",
  danger:
    "bg-red-600 text-white hover:bg-red-700 px-3 py-1.5 text-sm rounded-lg transition-colors duration-100 cursor-pointer",
  outline:
    "border border-gray-400 text-gray-900 bg-transparent hover:bg-gray-100 px-3 py-1.5 text-sm rounded-lg transition-colors duration-100 cursor-pointer",
  none: "bg-transparent text-inherit border-none p-0 m-0 shadow-none hover:bg-transparent cursor-pointer",
};

export const DialogTrigger = React.forwardRef<
  HTMLButtonElement,
  DialogTriggerProps
>(
  (
    { children, variant = "primary", className, asChild = false, ...props },
    ref
  ) => {
    const variantClass = variantKey[variant] || variantKey.primary;

    const { openDialog } = useDialogContext();

    if (asChild && React.isValidElement(children)) {
      const childProps: Record<string, any> = {
        className: cn(variantClass, children.props.className, className),
        onClick: (e: React.MouseEvent) => {
          if (typeof children.props.onClick === "function") {
            children.props.onClick(e);
          }
          openDialog();
        },
        ...props,
      };
      return React.cloneElement(children, childProps);
    }

    return (
      <button
        ref={ref}
        className={cn(variantClass, className)}
        type="button"
        onClick={openDialog}
        {...props}
      >
        {children ?? "Button"}
      </button>
    );
  }
);

DialogTrigger.displayName = "Button";
