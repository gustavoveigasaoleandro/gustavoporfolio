"use client";
import "./style.css";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import { Box } from "@/stories/Molecules/Box/Box";
import dynamic from "next/dynamic";
const DynamicCarousel = dynamic(
  // @ts-expect-error - react-spring-3d-carousel doesn't have types
  () => import("react-spring-3d-carousel"),
  {
    ssr: false,
  }
);
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
  const [goToSlide, setGoToSlide] = useState<number | undefined>(undefined);
  const [cards] = useState(table);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (goToSlide !== undefined) {
      setCurrentIndex(goToSlide);
    }
  }, [goToSlide]);

  return (
    <div className="flex w-[90vw] mobile:h-[280px] tablet:h-[500px] desktop:h-[450px] flex-col justify-evenly">
      <DynamicCarousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={false}
        goToSlideDelay={0}
        animationConfig={config.gentle}
      />
      <div className="dots flex  ">
        {Array.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "dot--active" : ""}`}
            onClick={() => setGoToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
