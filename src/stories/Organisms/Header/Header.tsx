import { Text } from "@/stories/Atoms/Text/Text";
import { DrawerComponent } from "@/stories/Molecules/Drawer/Drawer";
import { Drawer } from "vaul";

export const Header = () => {
  return (
    <header className=" bg-primary-default w-screen flex align-middle items-center pr-3 pl-3 justify-between h-[124px] mobile:h-[57px]">
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
