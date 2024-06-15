import JavascriptIcon from "@/assets/images/Logo/javascript.svg";
import TypescriptIcon from "@/assets/images/Logo/typescript.svg";
import DockerIcon from "@/assets/images/Logo/docker.svg";
import NextIcon from "@/assets/images/Logo/next.svg";
import ReactIcon from "@/assets/images/Logo/react.svg";
import StorybookIcon from "@/assets/images/Logo/storybook.svg";
import TaiwlindCss from "@/assets/images/Logo/tailwindcss.svg";
import Image from "next/image";

export const Logos = () => {
  return (
    <>
      <div className=" w-full relative flex flex-row items-center  justify-evenly">
        <div className=" w-[15%]  transition-transform transform hover:scale-125 ">
          <Image
            src={TypescriptIcon}
            alt="icon for the typescript expertise"
            className=" w-full"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className=" w-[15%]  transition-transform transform hover:scale-125 ">
          <Image
            src={JavascriptIcon}
            alt="icon for the javascript expertise"
            className=" w-full"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className=" w-[15%]  transition-transform transform hover:scale-125 ">
          <Image
            src={DockerIcon}
            alt="icon for the docker expertise"
            className=" w-full"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className="transition-transform transform hover:scale-125 ">
          <Image
            src={StorybookIcon}
            alt="icon for the storybook expertise"
            className=" w-full"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
      <div className=" w-full relative flex flex-row items-center  justify-evenly">
        <div className=" w-[15%]  transition-transform transform hover:scale-125 ">
          <Image
            src={NextIcon}
            alt="icon for the next.js expertise"
            className=" w-full"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className=" w-[15%]  transition-transform transform hover:scale-125 ">
          <Image
            src={ReactIcon}
            alt="icon for the react expertise"
            className=" w-full"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className=" w-[15%]  transition-transform transform hover:scale-125 ">
          <Image
            src={TaiwlindCss}
            alt="icon for the tailwindcss expertise"
            className=" w-full"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </>
  );
};
