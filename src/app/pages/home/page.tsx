import Image from "next/image";
import LogoImg from "@/assets/images/Logo/Logo.svg";
import { Header } from "@/stories/Organisms/Header/Header";
import { HeaderComponent } from "@/stories/Atoms/Headers/Header";
import { SkillMeter } from "@/stories/Organisms/SkillMeter/SkillMeter";
import { EmblaOptionsType } from "embla-carousel";
import { Carroussel } from "@/stories/Organisms/Carroussel/Carroussel";
import { PopUpTrigger } from "@/stories/Organisms/PopUpTrigger/PopUpTrigger";
import ParticlesBackground from "@/stories/Molecules/Background/Background";
import { VerticalCarousel } from "@/stories/Organisms/VerticalCarroussel/VerticalCarroussel";
import { Logos } from "@/stories/Organisms/Logos/Logos";
import { WorkGif } from "@/stories/Atoms/GIFS/Work/WorkGif";
import { StudyGif } from "@/stories/Atoms/GIFS/Study/StudyGif";
import { TextAnimation } from "@/stories/Atoms/TextAnimation/TextAnimation";
import { Text } from "@/stories/Atoms/Text/Text";

const OPTIONS: EmblaOptionsType = {
  axis: "y",
};
const slidesData = [
  {
    key: 1,
    type: "normal",
    children: <StudyGif />,
  },
  { key: 2, type: "normal", children: <Logos /> },
  {
    key: 3,
    type: "normal",
    children: <WorkGif />,
  },
];

const Home = () => {
  return (
    <div className=" overflow-x-hidden">
      <Header />
      <PopUpTrigger />
      <ParticlesBackground />
      <div className="w-screen  overflow-hidden min-h-screen h-fit mobile:pb-[5%] tablet:pb-0 align-middle items-center flex justify-center bg-primary-default">
        <div className=" w-full h-fit flex mobile:justify-center mobile:items-center laptop:justify-start mobile:flex-col tablet:flex-row items-center align-middle  ">
          <Image
            className=" z-10 tablet:w-[50%]  mobile:w-[100%]"
            src={LogoImg}
            alt="image from the logo"
          />
          <div className="flex flex-col w-[70%]">
            <HeaderComponent type="small" color="secondary">
              <TextAnimation
                text={`> Iniciando apresentação...`}
                repeatCount={0} // Ou o número de repetições desejado
              />
            </HeaderComponent>
            <div className="flex  tablet:flex-row  ">
              <HeaderComponent type="small" color="white">
                <TextAnimation
                  text={` Gustavo Veiga São Leandro`}
                  repeatCount={0} // Ou o número de repetições desejado
                  delay={2000}
                />
              </HeaderComponent>
            </div>

            <div className="flex flex-col">
              <HeaderComponent type="small" color="secondary">
                <TextAnimation
                  text={`> Sobre mim:`}
                  repeatCount={0} // Ou o número de repetições desejado
                  delay={4000}
                />
              </HeaderComponent>
              <Text color="white" type="small">
                <TextAnimation
                  text={`Sou desenvolvedor formado em Análise e Desenvolvimento de
                Sistemas, com experiência em React, Next.js, Node.js e Spring
                Boot. Trabalho com APIs, microserviços e infraestrutura
                escalável usando Docker e AWS, focando em soluções completas e
                bem documentadas.`}
                  repeatCount={0} // Ou o número de repetições desejado
                  delay={6000}
                />
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen min-h-[600px] tablet:h-screen mobile:h-fit bg-primary-default">
        <div className=" flex mobile:flex-col tablet:flex-col laptop:flex-col desktop:flex-row  justify-evenly w-screen  mobile:h-fit ">
          <section className=" flex flex-col justify-start items-center   mobile:pb-10 tablet:pb-0">
            <HeaderComponent
              className=" text-center font-semibold "
              color="secondary"
            >
              HABILIDADES
            </HeaderComponent>
            <div className=" flex flex-col w-full justify-center items-center ">
              <SkillMeter progress={80} skill={"Frontend"} />
              <SkillMeter progress={70} skill={"Backend"} />
              <SkillMeter progress={30} skill={"DevOps"} />
            </div>
          </section>

          <section className=" text-center z-10 flex-col justify-center items-center align-middle h-full mobile:pb-10 table:pb-0 ">
            <HeaderComponent className=" font-semibold m-0 " color="secondary">
              EXPERIÊNCIAS
            </HeaderComponent>
            <div className="mobile:w-[100vw] min-h-[300px] tablet:w-[100vw] laptop:w-[50vw] flex flex-col justify-center h-[50vh] mx-auto my-0">
              <VerticalCarousel slidesData={slidesData} />
            </div>
          </section>
        </div>
      </div>
      <div className="w-screen min-h-[600px] mobile:h-fit mobile:pb-10 tablet:h-screen bg-primary-default">
        <div className=" flex flex-col justify-evenly items-center w-full h-full">
          <HeaderComponent className="font-semibold m-0" color="secondary">
            PROJETOS
          </HeaderComponent>
          <Carroussel />
        </div>
      </div>
    </div>
  );
};

export default Home;
