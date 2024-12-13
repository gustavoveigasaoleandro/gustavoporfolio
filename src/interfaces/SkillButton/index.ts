import { StaticImageData } from "next/image";

export interface SkillButtonProps {
  image: StaticImageData | string; // Aceita ambos os tipos
  fallback: string;
  description: string;
}
