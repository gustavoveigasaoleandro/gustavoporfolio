"use client";
import React from "react";
import styled from "@emotion/styled";
import { Spring } from "react-spring/renderprops";
import { Box } from "@/stories/Molecules/Box/Box"; // Ajuste o caminho conforme necessário

const SlideContainer = styled.div`
  position: absolute;
  height: 70%;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
`;

type SlideProps = {
  content: { type: string; children?: React.ReactNode };
  offsetRadius: number;
  index: number;
  animationConfig: any;
  moveSlide: (direction: number) => void;
  delta?: number[];
  down?: boolean;
};

const Slide: React.FC<SlideProps> = ({
  content,
  offsetRadius,
  index,
  animationConfig,
  moveSlide,
  delta = [0, 0],
  down = false,
}) => {
  const offsetFromMiddle = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;
  const distanceFactor = 1 - Math.abs(offsetFromMiddle / (offsetRadius + 1));

  const translateYoffset =
    20 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
  let translateY = -50;

  if (offsetRadius !== 0) {
    if (index === 0) {
      translateY = 0;
    } else if (index === totalPresentables - 1) {
      translateY = -100;
    }
  }

  if (offsetFromMiddle === 0 && down) {
    translateY += delta[1] / (offsetRadius + 1);
    if (translateY > -40) {
      moveSlide(-1);
    }
    if (translateY < -100) {
      moveSlide(1);
    }
  }
  if (offsetFromMiddle > 0) {
    translateY += translateYoffset;
  } else if (offsetFromMiddle < 0) {
    translateY -= translateYoffset;
  }
  console.log(content);
  return (
    <Spring
      to={{
        transform: `translateX(0%) translateY(${translateY}%) scale(${distanceFactor})`,
        top: `${offsetRadius === 0 ? 50 : 50 + (offsetFromMiddle * 50) / offsetRadius}%`,
        opacity: distanceFactor * distanceFactor,
      }}
      config={animationConfig}
    >
      {(style) => (
        <SlideContainer
          style={{
            ...style,
            zIndex: Math.abs(Math.abs(offsetFromMiddle) - 2),
          }}
        >
          <Box type={content.type}>{content.children}</Box>
        </SlideContainer>
      )}
    </Spring>
  );
};

export default Slide;
