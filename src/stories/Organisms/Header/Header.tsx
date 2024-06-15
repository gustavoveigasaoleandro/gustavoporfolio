"use client";
import React, { useEffect, useState } from "react";
import { Text } from "@/stories/Atoms/Text/Text";
import { DrawerComponent } from "@/stories/Molecules/Drawer/Drawer";
import "./style.css";
export const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsAtTop(true);
    } else {
      setIsAtTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-screen z-20 flex align-middle items-center pr-[2%] pl-[2%] justify-between bg-primary-darker desktop:h-[124px] mobile:h-[57px] ${
        isAtTop ? "header-slide-down" : "hidden"
      }`}
    >
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
