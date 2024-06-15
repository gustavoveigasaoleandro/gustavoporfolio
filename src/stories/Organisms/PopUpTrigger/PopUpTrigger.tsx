"use client";
import PopUpIcon from "@/assets/images/PopupTrigger/PopupTrigger.svg";
import Image from "next/image";
import "./style.css";
import { useState } from "react";
import { PopUp } from "../PopUp/PopUp";
export const PopUpTrigger = () => {
  const [ModalActive, setModalActive] = useState(false);

  const TriggerModal = () => {
    setModalActive(!ModalActive);
  };

  return (
    <>
      {ModalActive && (
        <div className="z-20 fixed top-0 left-0 right-0 bottom-0 m-auto pt-10 flex justify-center items-center">
          <PopUp />
        </div>
      )}

      <div
        onClick={TriggerModal}
        className="z-30 desktop:w-xl fixed bottom-6 right-1 flex justify-center align-middle items-center desktop:h-[137px] mobile:w-[56px] mobile:h-[56px] bg-secondary-default rounded-full float"
      >
        <Image
          className="desktop:w-[96px] mobile:w-[40px]"
          src={PopUpIcon}
          alt="PopUp Icon"
        />
      </div>
    </>
  );
};
