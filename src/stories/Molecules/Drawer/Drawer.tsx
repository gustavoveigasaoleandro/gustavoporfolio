"use client";

import * as React from "react";
import MenuIcon from "@/assets/images/sidebar/menu.svg";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Text } from "@/stories/Atoms/Text/Text";
import Image from "next/image";
import Link from "next/link";
import { useLoading } from "@/context/LoadingContext";

export function DrawerComponent() {
  const { setIsLoading } = useLoading();

  const handleLinkClick = (href: string) => {
    // Verifica se o link é diferente da rota atual
    console.log(window.location.pathname);
    console.log(href);
    if (window.location.pathname !== href) {
      setIsLoading(true); // Ativa a tela de carregamento
    }

    // Fecha o Drawer após o clique
    const drawerCloseButton = document.querySelector(
      '[data-testid="drawer-close"]'
    ) as HTMLElement;
    if (drawerCloseButton) drawerCloseButton.click();
  };

  return (
    <div data-testid="drawer-component">
      <Drawer>
        <DrawerTrigger asChild>
          <button>
            <Image
              className="desktop:w-[30px] cursor-pointer mobile:[21px]"
              src={MenuIcon}
              alt="Menu button"
            />
          </button>
        </DrawerTrigger>
        <DrawerContent className="flex flex-row justify-end items-end">
          <div className="flex-grow h-full">
            <DrawerClose data-testid="drawer-close" className="w-full h-full" />
          </div>
          <nav className="bg-primary-default desktop:w-[35%] mobile:w-[100%] h-full flex flex-col justify-center align-middle items-center selection:text-center cursor-pointer">
            <Text color="white">
              <Link
                href="/pages/home"
                onClick={() => handleLinkClick("/pages/home")}
              >
                Início
              </Link>
            </Text>
            <Text color="white">
              <Link
                href="/pages/studies"
                onClick={() => handleLinkClick("/pages/studies")}
              >
                Cursos
              </Link>
            </Text>
            <Text color="white">
              <Link
                href="/pages/experiences"
                onClick={() => handleLinkClick("/pages/experience")}
              >
                Experiências
              </Link>
            </Text>
          </nav>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
