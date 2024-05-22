import * as React from "react";

import MenuIcon from "@/assets/images/sidebar/menu.svg";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Text } from "@/stories/Atoms/Text/Text";
import Link from "next/link";
import Image from "next/image";

export function DrawerComponent() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button>
          <Image
            className="w-[30px] cursor-pointer mobile:[21px]"
            src={MenuIcon}
            alt="Menu button"
          />
        </button>
      </DrawerTrigger>
      <DrawerContent className="flex flex-row justify-end items-end">
        <div className=" flex-grow h-full">
          <DrawerClose className="w-full h-full"></DrawerClose>
        </div>
        <nav className=" bg-primary-default w-[35%] mobile:w-[100%] h-full flex flex-col justify-center align-middle items-center selection:text-center cursor-pointer">
          <Text color="white">início</Text>
          <Text color="white">projetos</Text>
          <Text color="white">experiência</Text>
          <Text color="white">habilidades</Text>
        </nav>
      </DrawerContent>
    </Drawer>
  );
}
