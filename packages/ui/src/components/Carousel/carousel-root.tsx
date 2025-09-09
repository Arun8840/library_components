"use client";
import React, { createContext, useContext, useMemo } from "react";
import { CarouselContextProps, CarouselRootProps } from "./carousel-types";
import { cn } from "../../lib/utils";
import { useCarousel } from "./hook/use-carousel";
import { Button } from "../Button";

const baseClass = "bg-stone-100 rounded-lg w-1/3 h-70";

// Create the context
const CarouselContext = createContext<CarouselContextProps | null>(null);

// Custom hook to use the context
export const useCarouselContext = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error(
      "useCarouselContext must be used within a CarouselProvider"
    );
  }
  return context;
};

const CarouselRoot: React.FC<CarouselRootProps> = ({
  children,
  className,
  defaultIndex = 0,
  loop = false,
  showArrows = false,
  showIndicators = false,
  autoPlay = false,
  interval = 3000,
  total,
  ...otherProps
}) => {
  const contextValue = useCarousel(defaultIndex, total);

  return (
    <CarouselContext.Provider value={contextValue}>
      <div className={cn(baseClass, className)} {...otherProps}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
};

export default CarouselRoot;
