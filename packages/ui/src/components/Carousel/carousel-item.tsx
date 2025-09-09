import React from "react";
import { CarouselItemProps } from "./carousel-types";

export const CarouselItem: React.FC<CarouselItemProps> = ({
  children,
  className = "",
}) => {
  return <div className={`size-full w-full ${className}`}>{children}</div>;
};

CarouselItem.displayName = "CarouselItem";
