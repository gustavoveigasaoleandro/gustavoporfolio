"use client";
import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import PopUpIcon from "@/assets/images/PopupTrigger/PopupTrigger.svg";
import Image from "next/image";
import { PopUp } from "../PopUp/PopUp";

export const PopUpTrigger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div data-testid="PopUpTriggerWithDrawer">
      <Drawer
        open={isOpen}
        onOpenChange={setIsOpen}
        direction="bottom"
        dismissible={false}
      >
        {/* Trigger para abrir o Drawer */}
        <DrawerTrigger asChild>
          <div
            onClick={handleToggle}
            className="laptop:z-30 mobile:z-20 desktop:w-xl fixed bottom-6 right-1 flex justify-center align-middle items-center desktop:h-[137px] mobile:w-[56px] mobile:h-[56px] bg-secondary-default rounded-full float cursor-pointer"
          >
            <Image
              className="desktop:w-[96px] mobile:w-[40px]"
              src={PopUpIcon}
              alt="PopUp Icon"
            />
          </div>
        </DrawerTrigger>

        {/* Conteúdo do Drawer (PopUp) */}
        <DrawerContent className="flex justify-center h-[100%] items-center">
          <PopUp closeFunction={() => setIsOpen(false)} />
        </DrawerContent>
      </Drawer>
    </div>
  );
};
