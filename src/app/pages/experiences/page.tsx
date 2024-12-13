import { HeaderComponent } from "@/stories/Atoms/Headers/Header";
import ParticlesBackground from "@/stories/Molecules/Background/Background";
import { Header } from "@/stories/Organisms/Header/Header";
import { PopUpTrigger } from "@/stories/Organisms/PopUpTrigger/PopUpTrigger";
import { TimelineComponent } from "@/stories/Organisms/Timeline/Timeline";

const Experiences = () => {
  return (
    <div className=" flex-col bg-primary-default overflow-x-hidden h-screen">
      <Header />
      <PopUpTrigger />
      <ParticlesBackground />

      <HeaderComponent
        className=" text-center font-semibold "
        color="secondary"
      >
        JORNADA PROFISSIONAL
      </HeaderComponent>

      <TimelineComponent />
    </div>
  );
};

export default Experiences;
