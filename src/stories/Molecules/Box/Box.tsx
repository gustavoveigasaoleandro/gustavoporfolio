import { BoxProps } from "@/interfaces/Box";
import Dockerimg from "@/assets/images/GIFS/icons8-javascript.gif";
import JavascriptIcon from "@/assets/images/Logo/javascript.svg";
import TypescriptIcon from "@/assets/images/Logo/typescript.svg";
import DockerIcon from "@/assets/images/Logo/docker.svg";
import NextIcon from "@/assets/images/Logo/next.svg";
import ReactIcon from "@/assets/images/Logo/react.svg";
import StorybookIcon from "@/assets/images/Logo/storybook.svg";
import TaiwlindCss from "@/assets/images/Logo/tailwindcss.svg";
import Image from "next/image";
function SizeGenerator({ type, active }: BoxProps) {
  switch (type) {
    case "normal":
      return ` mobile:w-[290px] mobile:h-[170px] tablet:w-3xl tablet:h-xl desktop:w-3xl desktop:h-xl ${active ? "bg-red-300 shadow-2xl" : ""}   border-[1px] border-secondary-default  rounded-3xl `;
    default:
      return "mobile:w-[270px]  mobile:h-[250px] tablet:w-[600px] tablet:h-[458px] desktop:w-4xl desktop:h-[397px] rounded-3xl ";
  }
}

export const Box = ({
  type,
  style = "",
  active = false,
  children,
}: BoxProps) => {
  const size = SizeGenerator({ type, active });
  return (
    <div
      className={`${size} ${style} flex flex-col min-h-fit align-middle items-center justify-center gap-[10%] relative overflow-hidden embla__slide__number bg-light-default`}
    >
      {children}
    </div>
  );
};
