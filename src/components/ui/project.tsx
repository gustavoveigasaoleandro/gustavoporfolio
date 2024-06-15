import { StaticImageData } from "next/image";

export interface ProjectProps {
  imageSrc: StaticImageData;
  imageAlt: string;
  description: string;
  title: string;
  buttonText: string;
  buttonLink: string;
}
