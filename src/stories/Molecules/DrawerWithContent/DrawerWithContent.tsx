"use client";
import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { SkillButton } from "@/stories/Molecules/SkillButton/SkillButton";
import { StaticImageData } from "next/image";
import { DynamicNestedList } from "../ListItem/ListItem"; // Importar o componente DynamicNestedList

interface DrawerWithContentProps {
  skills: Array<{
    image: StaticImageData;
    description: string;
    fallback: string;
    listItems: Array<{
      text: string;
      subItems?: Array<{ text: string }>;
    }>; // Lista com subitens
  }>;
}

export function DrawerWithContent({ skills }: DrawerWithContentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState<React.ReactNode>(null);

  const handleOpen = (content: React.ReactNode) => {
    setCurrentContent(content);
    setIsOpen(true);
  };

  const isMobile = typeof window !== "undefined" && "ontouchstart" in window;

  return (
    <div data-testid="drawer-with-content" className="w-screen h-full">
      <Drawer open={isOpen} onOpenChange={setIsOpen} direction="bottom">
        {/* Trigger usando todos os SkillButtons */}
        <div className="flex mobile:flex-col tablet:flex-row align-middle items-center h-screen min-h-[600px] justify-evenly w-full">
          {skills.map((skill, index) => (
            <DrawerTrigger key={index} asChild>
              <div>
                <button
                  onTouchStart={
                    isMobile
                      ? () =>
                          handleOpen(
                            <div>
                              <DynamicNestedList
                                header={skill.description}
                                items={skill.listItems}
                              />
                            </div>
                          )
                      : undefined
                  }
                  onClick={
                    !isMobile
                      ? () =>
                          handleOpen(
                            <div>
                              <DynamicNestedList
                                header={skill.description}
                                items={skill.listItems}
                              />
                            </div>
                          )
                      : undefined
                  }
                >
                  <SkillButton
                    image={skill.image}
                    description={skill.description}
                    fallback={skill.fallback}
                  />
                </button>
              </div>
            </DrawerTrigger>
          ))}
        </div>

        {/* Conteúdo do Drawer */}
        <DrawerContent className="flex bg-primary-default h-[60vh]">
          <div className="relative w-full p-4">
            <DrawerClose></DrawerClose>
            {currentContent}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
