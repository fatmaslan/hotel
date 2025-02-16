"use client"
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { SliderImage } from "../../../../constans";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-[32rem">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {SliderImage.map((image, index) => (
            <CarouselItem key={index}>
              <Image
                src={image.href}
                alt={image.alt}
                width={1920}
                height={1080}
              ></Image>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='hidden lg:flex left-0' />
        <CarouselNext className="hidden lg:flex right-0" />
      </Carousel>
    </div>
  );
};

export default Hero;
