import PopUpIcon from "@/assets/images/PopupTrigger/PopupTrigger.svg";
import Image from "next/image";

export const PopUpTrigger = () => {
  return (
    <div className=" w-xl flex justify-center align-middle items-center h-[137px] mobile:w-[56px] mobile:h-[56px] bg-secondary-default rounded-full">
      <Image
        className="w-[96px] mobile:w-[40px]"
        src={PopUpIcon}
        alt="PopUp Icon"
      />
    </div>
  );
};
