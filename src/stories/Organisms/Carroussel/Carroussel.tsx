"use client";
import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import { Box } from "@/stories/Molecules/Box/Box";

export function Carroussel() {
  const Array = [
    {
      key: 1,
      content: <Box type="big" />,
    },
    {
      key: 2,
      content: <Box type="big" />,
    },
    {
      key: 3,
      content: <Box type="big" />,
    },
  ];

  const table = Array.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState<number | undefined>(undefined);
  const [cards] = useState(table);
  return (
    <div className=" h-screen w-[90%] my-0 mx-auto">
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={true}
        animationConfig={config.gentle}
      />
    </div>
  );
}
