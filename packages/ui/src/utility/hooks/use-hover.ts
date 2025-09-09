import React from "react";
import { useRef, useState, useCallback } from "react";

type UseHoverResult<T extends HTMLElement = HTMLElement> = {
  ref: React.MutableRefObject<T | null>;
  hovered: boolean;
};

export function useHover<
  T extends HTMLElement = HTMLElement,
>(): UseHoverResult<T> {
  const ref = useRef<null | T>(null) as React.MutableRefObject<T>;
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = useCallback(() => setHovered(true), []);
  const handleMouseOut = useCallback(() => setHovered(false), []);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    node.addEventListener("mouseenter", handleMouseOver);
    node.addEventListener("mouseleave", handleMouseOut);

    return () => {
      node.removeEventListener("mouseenter", handleMouseOver);
      node.removeEventListener("mouseleave", handleMouseOut);
    };
  }, [handleMouseOver, handleMouseOut]);

  return { ref, hovered };
}
