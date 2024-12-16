"use client";

import React from "react";
import RabbitMQIcon from "@/assets/images/Logo/rabbitmq.svg";
import AWSIcon from "@/assets/images/Logo/aws.svg";
import DockerIcon from "@/assets/images/Logo/docker.svg";
import NextIcon from "@/assets/images/Logo/next.svg";
import ReactIcon from "@/assets/images/Logo/react.svg";
import SpringIcon from "@/assets/images/Logo/springio.svg";
import TailwindCssIcon from "@/assets/images/Logo/tailwindcss.svg";
import { LogoWithPopover } from "@/stories/Molecules/LogoWithPopOver/LogoWithPopOver";

export const Logos = () => {
  return (
    <>
      <div className="w-full relative flex flex-row items-center justify-evenly">
        <LogoWithPopover
          src={AWSIcon}
          alt="AWS"
          description="AWS: Plataforma de computação em nuvem para infraestrutura escalável."
          animationDelay="0s"
        />

        <LogoWithPopover
          src={NextIcon}
          alt="Next.js"
          description="Next.js: Framework React para renderização no servidor e geração de sites estáticos."
          animationDelay="0.3s"
        />

        <LogoWithPopover
          src={DockerIcon}
          alt="Docker"
          description="Docker: Plataforma para desenvolvimento, execução e gerenciamento de containers."
          animationDelay="0.6s"
        />
        <LogoWithPopover
          src={SpringIcon}
          alt="Spring"
          description="Spring: Framework Java para criação de aplicações robustas e escaláveis."
          animationDelay="0.9s"
        />
      </div>
      <div className="w-full relative flex flex-row items-center justify-evenly">
        <LogoWithPopover
          src={RabbitMQIcon}
          alt="RabbitMQ"
          description="RabbitMQ: Sistema de mensageria robusto para aplicações distribuídas."
          animationDelay="1.2s"
        />

        <LogoWithPopover
          src={ReactIcon}
          alt="React"
          description="React: Biblioteca JavaScript para construção de interfaces de usuário dinâmicas."
          animationDelay="1.5s"
        />
        <LogoWithPopover
          src={TailwindCssIcon}
          alt="TailwindCSS"
          description="TailwindCSS: Framework de utilitários para estilização de interfaces de forma eficiente."
          animationDelay="1.8s"
        />
      </div>
    </>
  );
};
