"use client";
import { TextAnimationInterface } from "@/interfaces/TextAnimation";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export const TextAnimation = ({
  text,
  repeatCount,
  delay = 0, // Novo parâmetro de delay com valor padrão
}: TextAnimationInterface) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, delay);

    return () => clearTimeout(timer); // Limpeza do timer ao desmontar o componente
  }, [delay]);

  if (!showAnimation) {
    return null; // Não exibe nada até que o delay termine
  }

  return (
    <TypeAnimation
      style={{ whiteSpace: "pre-line", display: "block" }}
      sequence={[text]}
      repeat={repeatCount}
    />
  );
};
