import JavascriptIcon from "@/assets/images/Logo/javascript.svg";
import TypescriptIcon from "@/assets/images/Logo/typescript.svg";
import DockerIcon from "@/assets/images/Logo/docker.svg";
import NextIcon from "@/assets/images/Logo/next.svg";
import ReactIcon from "@/assets/images/Logo/react.svg";
import StorybookIcon from "@/assets/images/Logo/storybook.svg";
import TailwindCssIcon from "@/assets/images/Logo/tailwindcss.svg";
import Image from "next/image";

export const Logos = () => {
  return (
    <>
      <div className="w-full relative flex flex-row items-center justify-evenly">
        <div className="w-[15%] transition-transform transform hover:scale-125">
          <Image
            src={TypescriptIcon}
            alt="icon for the typescript expertise"
            className="w-full float"
            style={{
              objectFit: "contain",
              animationDelay: "0s", // Sem delay
            }}
          />
        </div>
        <div className="w-[15%] transition-transform transform hover:scale-125">
          <Image
            src={JavascriptIcon}
            alt="icon for the javascript expertise"
            className="w-full float"
            style={{
              objectFit: "contain",
              animationDelay: "0.3s", // 0.3s de delay
            }}
          />
        </div>
        <div className="w-[15%] transition-transform transform hover:scale-125">
          <Image
            src={DockerIcon}
            alt="icon for the docker expertise"
            className="w-full float"
            style={{
              objectFit: "contain",
              animationDelay: "0.6s", // 0.6s de delay
            }}
          />
        </div>
        <div className="w-[15%] transition-transform transform hover:scale-125">
          <Image
            src={StorybookIcon}
            alt="icon for the storybook expertise"
            className="w-full float"
            style={{
              objectFit: "contain",
              animationDelay: "0.9s", // 0.9s de delay
            }}
          />
        </div>
      </div>
      <div className="w-full relative flex flex-row items-center justify-evenly">
        <div className="w-[15%] transition-transform transform hover:scale-125">
          <Image
            src={NextIcon}
            alt="icon for the next.js expertise"
            className="w-full float"
            style={{
              objectFit: "contain",
              animationDelay: "0s", // 1.2s de delay
            }}
          />
        </div>
        <div className="w-[15%] transition-transform transform hover:scale-125">
          <Image
            src={ReactIcon}
            alt="icon for the react expertise"
            className="w-full float"
            style={{
              objectFit: "contain",
              animationDelay: "0.6s", // 1.5s de delay
            }}
          />
        </div>
        <div className="w-[15%] transition-transform transform hover:scale-125">
          <Image
            src={TailwindCssIcon}
            alt="icon for the tailwindcss expertise"
            className="w-full float"
            style={{
              objectFit: "contain",
              animationDelay: "0.9s", // 1.8s de delay
            }}
          />
        </div>
      </div>
    </>
  );
};
