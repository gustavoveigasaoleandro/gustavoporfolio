"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export const WorkGif = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-light-default bg-cover bg-center transition-all duration-1000">
      <div className="absolute w-full h-full flex justify-center items-center">
        <TypeAnimation
          sequence={[
            "TRABALHOS",
            1000,
            "PROJETOS",
            2000,
            "DESAFIOS",
            1000,
            "TAREFAS",
            2000,
            "OBJETIVOS",
            1000,
            "MISSÕES",
            2000,
          ]}
          speed={10}
          className="desktop:text-xs mobile:text-3xs text-center tablet:text-3xs laptop:text-3xs font-bold text-secondary-default"
          repeat={Infinity}
        />
      </div>
    </div>
  );
};
