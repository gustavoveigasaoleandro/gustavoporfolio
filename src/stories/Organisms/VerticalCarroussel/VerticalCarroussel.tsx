"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Box } from "@/stories/Molecules/Box/Box";
import { EmblaOptionsType } from "embla-carousel";
import "./style.css";

type SlideData = {
  type: string;
};

type PropType = {
  slidesData: SlideData[];
  options?: EmblaOptionsType;
};

export const EmblaCarousel: React.FC<PropType> = ({
  slidesData = [],
  options,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { ...options, containScroll: "trimSnaps" },
    [Autoplay({ playOnInit: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = (index: number) => {
    emblaApi && emblaApi.scrollTo(index);
  };

  return (
    <div className="embla flex ">
      <section className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slidesData.map((data, index) => (
            <div
              className={`embla__slide transition-scale duration-500 ${index === selectedIndex ? "scale-105 z-10" : "scale-100"}`}
              key={index}
            >
              <Box active={index === selectedIndex} type={data.type} />
            </div>
          ))}
        </div>
      </section>
      <div className="embla__dots flex flex-col items-center">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`dot self-center ${index === selectedIndex ? "dot--active" : ""}`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};
