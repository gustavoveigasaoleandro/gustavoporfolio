"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";
import { ProgressBarProps } from "@/interfaces/ProgressBar";

export function ProgressBar({ progressValue }: ProgressBarProps) {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(progressValue), 500);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    setProgress(progressValue);
  }, [progressValue]);

  return <Progress value={progress} className="w-[100%]" />;
}
