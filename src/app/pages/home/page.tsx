import Image from "next/image";
import LogoImg from "@/assets/images/Logo/Logo.svg";
import { Header } from "@/stories/Organisms/Header/Header";
import { HeaderComponent } from "@/stories/Atoms/Headers/Header";
import { SkillMeter } from "@/stories/Organisms/SkillMeter/SkillMeter";
import { EmblaCarousel } from "@/stories/Organisms/VerticalCarroussel/VerticalCarroussel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = {
  axis: "y",
};
const slidesData = [{ type: "normal" }, { type: "normal" }, { type: "normal" }];

const home = () => {
  return (
    <div className=" overflow-x-hidden">
      <Header />
      <div className="w-screen overflow-hidden h-screen bg-primary-default">
        <div className=" w-full h-full bg-main pt-[124px] mobile:pt-[57px] flex justify-center">
          <Image className=" w-[80%]" src={LogoImg} alt="image from the logo" />
        </div>
      </div>
      <div className="w-screen min-h-screen bg-primary-default">
        <div className=" flex justify-evenly w-screen h-screen bg-main ">
          <section>
            <HeaderComponent className="  font-semibold" color="secondary">
              HABILIDADES
            </HeaderComponent>

            <div className=" flex flex-col">
              <SkillMeter progress={90} skill={"html"} />
              <SkillMeter progress={30} skill={"html"} />
              <SkillMeter progress={50} skill={"html"} />
              <SkillMeter progress={74} skill={"html"} />
              <SkillMeter progress={23} skill={"html"} />
            </div>
          </section>

          <section className=" text-center flex flex-col h-full">
            <HeaderComponent className=" font-semibold m-0" color="secondary">
              EXPERIÊNCIAS
            </HeaderComponent>
            <div className="relative k flex  flex-col overflow-hidden justify-center align-middle  w-[50vw] flex-grow">
              <EmblaCarousel slidesData={slidesData} options={OPTIONS} />
            </div>
          </section>
        </div>
      </div>
      <div className="w-screen overflow-hidden h-screen bg-primary-default" />
    </div>
  );
};

export default home;
