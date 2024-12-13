import ParticlesBackground from "@/stories/Molecules/Background/Background";
import { Header } from "@/stories/Organisms/Header/Header";
import { ListSkills } from "@/stories/Organisms/ListSkills/ListSkills";
import { PopUpTrigger } from "@/stories/Organisms/PopUpTrigger/PopUpTrigger";

const Studies = () => {
  return (
    <div className=" flex-col  bg-primary-default max-w-screen  overflow-x-hidden h-screen">
      <Header />
      <PopUpTrigger />
      <ParticlesBackground />
      <ListSkills />
    </div>
  );
};

export default Studies;
