import React from "react";

export interface TextInterface
  extends React.HTMLAttributes<HTMLParagraphElement> {
  type?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "white";
  font?: string;
}
