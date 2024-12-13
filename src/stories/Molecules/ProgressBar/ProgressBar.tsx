"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";
import { ProgressBarProps } from "@/interfaces/ProgressBar";

export function ProgressBar({ progressValue }: ProgressBarProps) {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(progressValue);
    }, 500);
    return () => clearTimeout(timer); // Limpeza para evitar efeitos inesperados
  }, [progressValue]); // Dependência no valor que deve atualizar o progresso

  return (
    <Progress value={progress} className="w-[100%] mobile:h-2 tablet:h-4" />
  );
}
