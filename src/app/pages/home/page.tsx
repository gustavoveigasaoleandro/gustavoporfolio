import Image from "next/image";
import LogoImg from "@/assets/images/Logo/Logo.svg";
import { Header } from "@/stories/Organisms/Header/Header";
import { HeaderComponent } from "@/stories/Atoms/Headers/Header";
import { SkillMeter } from "@/stories/Organisms/SkillMeter/SkillMeter";
import { EmblaOptionsType } from "embla-carousel";
import { Carroussel } from "@/stories/Organisms/Carroussel/Carroussel";
import { PopUpTrigger } from "@/stories/Organisms/PopUpTrigger/PopUpTrigger";

const OPTIONS: EmblaOptionsType = {
  axis: "y",
};
const slidesData = [{ type: "normal" }, { type: "normal" }, { type: "normal" }];

const home = () => {
  return (
    <div className=" overflow-x-hidden">
      <Header />
      <PopUpTrigger />
      <div className="w-screen overflow-hidden desktop:min-h-screen tablet:h-fit laptop:h-fit mobile:h-fit bg-primary-default">
        <div className=" w-full desktop:min-h-screen tablet:h-fit laptop:h-fit  l mobile:h-fit bg-main desktop:pt-[124px] mobile:pt-[57px] flex justify-center">
          <Image className=" w-[80%]" src={LogoImg} alt="image from the logo" />
        </div>
      </div>
      <div className="w-screen desktop:min-h-screen tablet:h-fit laptop:h-fit mobile:h-fit bg-primary-default">
        <div className=" flex desktop:flex-row mobile:flex-col justify-evenly w-screen desktop:min-h-screen tablet:h-fit laptop:h-fit  l mobile:h-fit ">
          <section className=" flex flex-col justify-start items-center  ">
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

          <section className=" text-center flex-col justify-center items-center align-middle h-full ">
            <HeaderComponent className=" font-semibold m-0 " color="secondary">
              EXPERIÊNCIAS
            </HeaderComponent>
          </section>
        </div>
      </div>
      <div className="w-screen h-screen bg-primary-default">
        <div className=" flex flex-col justify-evenly items-center w-full h-full">
          <HeaderComponent className=" font-semibold m-0" color="secondary">
            PROJETOS
          </HeaderComponent>
          <Carroussel />
        </div>
      </div>
    </div>
  );
};

export default home;
