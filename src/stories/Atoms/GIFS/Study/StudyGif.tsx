"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export const StudyGif = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-light-default bg-cover bg-center transition-all duration-1000">
      <div className="absolute w-full h-full flex justify-center items-center">
        <TypeAnimation
          sequence={[
            "CURSOS",
            1000,
            "ESTUDOS",
            2000,
            "APRENDIZADO",
            2000,
            "DESENVOLVIMENTO",
            1000,
          ]}
          speed={10}
          cursor={true}
          className="desktop:text-xs mobile:text-3xs text-center tablet:text-3xs laptop:text-3xs font-bold text-secondary-default"
          repeat={Infinity}
        />
      </div>
    </div>
  );
};
