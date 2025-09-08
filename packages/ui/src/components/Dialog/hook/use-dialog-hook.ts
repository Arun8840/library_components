import { useState, useCallback } from "react";

export function useDialog(
  initialOpen: boolean = false,
  onOpenChange?: (value: boolean) => void
) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);

  // controlled if onOpenChange is provided
  const isControlled = typeof onOpenChange === "function";
  const open = isControlled ? initialOpen : uncontrolledOpen;

  const setOpen = useCallback(
    (value: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(value);
      }
      onOpenChange?.(value); // always notify parent
    },
    [isControlled, onOpenChange]
  );

  const openDialog = useCallback(() => setOpen(true), [setOpen]);
  const closeDialog = useCallback(() => setOpen(false), [setOpen]);
  const toggleDialog = useCallback(() => setOpen(!open), [setOpen, open]);

  return {
    open,
    setOpen,
    openDialog,
    closeDialog,
    toggleDialog,
  };
}
