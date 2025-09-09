import React, { ReactNode } from "react";
import { CarouselContentProps } from "./carousel-types";
import { cn } from "../../lib/utils";
import { useCarouselContext } from "./carousel-root";
import { Button } from "../Button";

const baseClass = "relative size-full";
export const CarouselContent: React.FC<CarouselContentProps> = ({
  children,
  className = "",
}) => {
  // Loop through children and render each child
  const { currentIndex, next, prev } = useCarouselContext();

  return (
    <div className={cn(baseClass, className)}>
      <div className="size-full">
        {React.Children.map(children, (child, idx) => {
          return (
            idx === currentIndex && (
              <React.Fragment key={idx}>{child}</React.Fragment>
            )
          );
        })}
      </div>

      <div className="flex items-center gap-2  justify-between absolute w-full inset-0 px-2">
        <Button
          onClick={prev}
          className="size-7 text-gray-800 hover:bg-stone-200 bg-inherit grid place-items-center p-0"
        >
          <ChevronLeft />
        </Button>
        <Button
          onClick={next}
          className="size-7 text-gray-800 hover:bg-stone-200 bg-inherit grid place-items-center p-0"
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

CarouselContent.displayName = "CarouselContent";

export const ChevronLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="13 16 7 10 13 4" />
  </svg>
);

export const ChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="7 4 13 10 7 16" />
  </svg>
);
