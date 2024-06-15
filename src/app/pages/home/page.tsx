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
import { Logos } from "@/stories/Atoms/Logos/Logos";
import { WorkGif } from "@/stories/Atoms/GIFS/Work/WorkGif";
import { StudyGif } from "@/stories/Atoms/GIFS/Study/StudyGif";

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
      <div className="w-screen overflow-hidden h-screen  align-middle items-center flex justify-center bg-primary-default">
        <div className=" w-full h-fit flex justify-center align-middle  ">
          <Image
            className=" z-10 desktop:w-[50%] mobile:w-[100%]"
            src={LogoImg}
            alt="image from the logo"
          />
        </div>
      </div>
      <div className="w-screen tablet:h-screen mobile:h-fit bg-primary-default">
        <div className=" flex mobile:flex-col tablet:flex-col laptop:flex-col desktop:flex-row  justify-evenly w-screen  mobile:h-fit ">
          <section className=" flex flex-col justify-start items-center   mobile:pb-10 tablet:pb-0">
            <HeaderComponent
              className=" text-center font-semibold "
              color="secondary"
            >
              HABILIDADES
            </HeaderComponent>
            <div className=" flex flex-col w-full justify-center items-center ">
              <SkillMeter progress={90} skill={"html"} />
              <SkillMeter progress={30} skill={"html"} />
              <SkillMeter progress={50} skill={"html"} />
              <SkillMeter progress={74} skill={"html"} />
              <SkillMeter progress={23} skill={"html"} />
            </div>
          </section>

          <section className=" text-center z-10 flex-col justify-center items-center align-middle h-full mobile:pb-10 table:pb-0 ">
            <HeaderComponent className=" font-semibold m-0 " color="secondary">
              EXPERIÊNCIAS
            </HeaderComponent>
            <div className="mobile:w-[100vw] tablet:w-[50vw] flex flex-col justify-center h-[50vh] mx-auto my-0">
              <VerticalCarousel slidesData={slidesData} />
            </div>
          </section>
        </div>
      </div>
      <div className="w-screen mobile:h-fit mobile:pb-10 tablet:h-screen bg-primary-default">
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
