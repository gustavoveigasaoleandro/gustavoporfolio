import { Text } from "@/stories/Atoms/Text/Text";
import { DrawerComponent } from "@/stories/Molecules/Drawer/Drawer";
import { Drawer } from "vaul";

export const Header = () => {
  return (
    <header className=" w-screen z-10 fixed top-0 flex align-middle items-center pr-[2%] pl-[2%] justify-between bg-primary-darker h-[124px] mobile:h-[57px]">
      <div className="flex flex-wrap max-w-[50%]">
        <Text color="white">
          <span className=" text-secondary-default">Gustavo</span> Veiga São
          Leandro
        </Text>
      </div>
      <DrawerComponent />
    </header>
  );
};
