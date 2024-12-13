"use client";
import { useState, useEffect, Children } from "react";
import { config } from "react-spring";
import dynamic from "next/dynamic";
import { Project } from "@/stories/Molecules/Project/Project";
import JoaoPorfolio from "@/assets/images/Projects/Projeto _João.png"; // Ajuste o caminho conforme
import ERPImage from "@/assets/images/Projects/ERP.png"; // Ajuste o caminho conforme
import FoodHub from "@/assets/images/Projects/FoodHub.png"; // Ajuste o caminho conforme
import Alfabit from "@/assets/images/Projects/Alfabit.png"; // Ajuste o caminho conforme

const DynamicCarousel = dynamic(
  // @ts-expect-error - react-spring-3d-carousel doesn't have types
  () => import("react-spring-3d-carousel"),
  {
    ssr: false,
  }
);

export function Carroussel() {
  const array = [
    {
      key: 1,
      content: (
        <Project
          imageSrc={JoaoPorfolio}
          imageAlt="Image from John website"
          title="Web: Portfólio"
          description="Portfólio criado para um cinematógrafo exibir e compartilhar seus projetos."
          buttonText="acessar"
          buttonLink="https://joao-portfolio-sage.vercel.app/pages/home"
        />
      ),
    },
    {
      key: 2,
      content: (
        <Project
          imageSrc={ERPImage}
          imageAlt="Backend: ERP"
          title="Backend: ERP"
          description="Sistema de gestão empresarial com base em uma arquitetura de microserviços"
          buttonText="acessar"
          buttonLink="https://www.linkedin.com/feed/update/urn:li:activity:7264619310357094402/"
        />
      ),
    },
    {
      key: 3,
      content: (
        <Project
          imageSrc={FoodHub}
          imageAlt="Image from Foodhub app"
          title="App: Foodhub"
          description="Projeto mobile para um serviço de delivery."
          buttonText="acessar"
          buttonLink="https://www.linkedin.com/posts/gustavo-veiga-s%C3%A3o-leandro-2763651b1_reactnative-expo-storybook-activity-7175605037774102528-1kD6?utm_source=share&utm_medium=member_desktop"
        />
      ),
    },
    {
      key: 4,
      content: (
        <Project
          imageSrc={Alfabit}
          imageAlt="Image from Alfabit website"
          title="Web: Portfólio"
          description="Projeto web utilizando storybook para documentação."
          buttonText="acessar"
          buttonLink="https://www.linkedin.com/posts/gustavo-veiga-s%C3%A3o-leandro-2763651b1_nextjs-tailwindcss-storybook-activity-7151324271225569280-7yhx?utm_source=share&utm_medium=member_desktop"
        />
      ),
    },
  ];

  const table = array.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [goToSlide, setGoToSlide] = useState<number | undefined>(undefined);
  const [cards] = useState(
    array.map((element, index) => ({
      ...element,
      onClick: () => setGoToSlide(index),
    }))
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null); // Store the timeout ID for clearing

  useEffect(() => {
    if (goToSlide !== undefined) {
      setCurrentIndex(goToSlide);
    }
  }, [goToSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGoToSlide((prevIndex) =>
        prevIndex === undefined ? 0 : (prevIndex + 1) % array.length
      );
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, [array.length]); // Inclua 'array.length' como dependência

  return (
    <div className="flex w-[90vw] mobile:h-[280px] tablet:h-[500px] desktop:h-[450px] min-h-[280px] flex-col justify-evenly">
      <DynamicCarousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={false}
        goToSlideDelay={0}
        animationConfig={config.gentle}
      />
      <div className="dots z-10 flex  ">
        {array.map((_, index) => (
          <button
            data-testid={`navButton-${index}`}
            key={index}
            className={`dot ${index === currentIndex ? "dot--active" : ""}`}
            onClick={() => setGoToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
