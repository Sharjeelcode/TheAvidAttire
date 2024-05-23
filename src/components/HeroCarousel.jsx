import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Cards from "./Cards";
export default function HeroCarousel() {
  return (
    <Carousel className="w-full ">
      <CarouselContent className="ml-1">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="pl-1 basic-1 md:basis-1/2 lg:basis-1/4"
          >
            <Cards />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
