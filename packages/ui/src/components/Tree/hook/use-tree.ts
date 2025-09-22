import { useState } from "react";

export const useTree = ({
  collapsible,
  defaultOpen,
}: {
  collapsible: boolean;
  defaultOpen: string | number;
}) => {
  const [openItems, setOpenItems] = useState<(string | number)[]>([
    defaultOpen,
  ]);

  const toggleItem = (id: string | number) => {
    if (collapsible) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  const isOpen = (id: string | number) => openItems.includes(id);

  return { openItems, toggleItem, isOpen };
};
