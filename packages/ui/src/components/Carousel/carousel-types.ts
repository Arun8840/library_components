import { HTMLAttributes } from "react";

export interface CarouselRootProps extends HTMLAttributes<HTMLDivElement> {
  autoPlay?: boolean;
  interval?: number;
  loop?: boolean;
  showIndicators?: boolean;
  showArrows?: boolean;
  defaultIndex?: number;
  total: number;
}

export interface CarouselContentProps extends HTMLAttributes<HTMLDivElement> {}
export interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {}

export interface CarouselContextProps {
  currentIndex: number;
  next: () => void;
  prev: () => void;
}
