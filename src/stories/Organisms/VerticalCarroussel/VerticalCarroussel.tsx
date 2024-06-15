"use client";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Slide from "../Slide/Slide"; // Certifique-se de ajustar o caminho do Slide corretamente

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

function mod(a: number, b: number) {
  return ((a % b) + b) % b;
}

type SlideData = {
  type: string;
};

type VerticalCarouselProps = {
  slidesData: SlideData[];
  offsetRadius?: number;
  showNavigation?: boolean;
  animationConfig?: any;
};

type SlidesArray = { data: SlideData; index: number };

export const VerticalCarousel: React.FC<VerticalCarouselProps> = ({
  slidesData = [],
  offsetRadius = 2,
  showNavigation = true,
  animationConfig = { tension: 120, friction: 14 },
}) => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [presentableSlides, setPresentableSlides] = useState<SlidesArray[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.isComposing) return;

      if (event.key === "ArrowUp") {
        moveSlide(-1);
      } else if (event.key === "ArrowDown") {
        moveSlide(1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const modBySlidesLength = (index: number) => {
    return mod(index, slidesData.length);
  };

  const moveSlide = (direction: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((prevIndex) => modBySlidesLength(prevIndex + direction));
  };

  useEffect(() => {
    setPresentableSlides(getPresentableSlides());
    const timer = setTimeout(() => setIsAnimating(false), 500);

    return () => clearTimeout(timer);
  }, [index]);

  const clampOffsetRadius = (offsetRadius: number) => {
    const upperBound = Math.floor((slidesData.length - 1) / 2);
    return Math.max(0, Math.min(offsetRadius, upperBound));
  };

  const getPresentableSlides = () => {
    let clampedOffsetRadius = clampOffsetRadius(offsetRadius);
    const presentableSlides = [];

    for (let i = -clampedOffsetRadius; i <= clampedOffsetRadius; i++) {
      presentableSlides.push({
        data: slidesData[modBySlidesLength(index + i)],
        index: modBySlidesLength(index + i),
      });
    }

    return presentableSlides;
  };

  return (
    <React.Fragment>
      <Wrapper>
        {presentableSlides.map((slide, presentableIndex) => (
          <Slide
            key={slide.index}
            content={slide.data}
            moveSlide={moveSlide}
            offsetRadius={clampOffsetRadius(offsetRadius)}
            index={presentableIndex}
            animationConfig={animationConfig}
          />
        ))}
        {showNavigation && (
          <div className="dots z-10 flex absolute bottom-2">
            {slidesData.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? "dot--active" : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        )}
      </Wrapper>
    </React.Fragment>
  );
};
