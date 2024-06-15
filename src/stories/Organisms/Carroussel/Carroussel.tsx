"use client";
import "./style.css";
import { useState, useEffect, Children } from "react";
import { config } from "react-spring";
import dynamic from "next/dynamic";
import { Project } from "@/stories/Molecules/Project/Project";
import JoaoPorfolio from "@/assets/images/Projects/Projeto _João.png"; // Ajuste o caminho conforme
import DinamicaDaFace from "@/assets/images/Projects/Projeto_Doutora.png"; // Ajuste o caminho conforme
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
          buttonLink="https://example.com"
        />
      ),
    },
    {
      key: 2,
      content: (
        <Project
          imageSrc={DinamicaDaFace}
          imageAlt="Image from Dinamica da Face website"
          title="Web: Dinâmica da Face"
          description="Site criado para um consultório odontológico e esteticista."
          buttonText="acessar"
          buttonLink="https://example.com"
        />
      ),
    },
    {
      key: 3,
      content: (
        <Project
          imageSrc={FoodHub}
          imageAlt="Image from Foodhub app"
          title="Web: Portfólio"
          description="Projeto mobile para um serviço de delivery."
          buttonText="acessar"
          buttonLink="https://example.com"
        />
      ),
    },
    {
      key: 4,
      content: (
        <Project
          imageSrc={Alfabit}
          imageAlt="Image from Foodhub app"
          title="Web: Portfólio"
          description="Projeto mobile para um serviço de delivery."
          buttonText="acessar"
          buttonLink="https://example.com"
        />
      ),
    },
  ];

  const table = array.map((element, index) => {
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

  useEffect(() => {
    const interval = setInterval(() => {
      setGoToSlide((prevIndex) =>
        prevIndex === undefined ? 0 : (prevIndex + 1) % array.length
      );
    }, 7000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

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
      <div className="dots z-10 flex  ">
        {array.map((_, index) => (
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
