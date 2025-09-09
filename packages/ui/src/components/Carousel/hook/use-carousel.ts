import { useState, useCallback } from "react";

export function useCarousel(initialIndex: number = 0, itemsLength: number = 0) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const next = useCallback(() => {
    setCurrentIndex((prev) =>
      itemsLength === 0 ? 0 : (prev + 1) % itemsLength
    );
  }, [itemsLength]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) =>
      itemsLength === 0 ? 0 : (prev - 1 + itemsLength) % itemsLength
    );
  }, [itemsLength]);

  return {
    currentIndex,
    next,
    prev,
  };
}
