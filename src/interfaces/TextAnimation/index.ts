import React from "react";

export interface TextAnimationInterface
  extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string;
  repeatCount: number;
  delay?: number;
}
