import { CarouselContent } from "./carousel-content";
import { CarouselItem } from "./carousel-item";
import CarouselRoot from "./carousel-root";

const Carousel = Object.assign(CarouselRoot, {
  Content: CarouselContent,
  Item: CarouselItem,
});

export { Carousel };
