import { BoxProps } from "@/interfaces/Box";

function SizeGenerator({ type, active }: BoxProps) {
  switch (type) {
    case "normal":
      return ` mobile:w-[224px] mobile:h-lg tablet:w-3xl tablet:h-xl desktop:w-3xl desktop:h-xl ${active ? "bg-red-300 shadow-2xl" : ""}   border-[1px] border-secondary-default  rounded-3xl `;
      break;
    default:
      return "mobile:w-[306px] mobile:h-[234px] tablet:w-[600px] tablet:h-[458px] desktop:w-4xl desktop:h-[397px] rounded-3xl ";
      break;
  }
}

export const Box = ({ type, style = "", active = false }: BoxProps) => {
  const size = SizeGenerator({ type, active });
  return (
    <div
      className={`${size} ${style} embla__slide__number bg-light-default`}
    ></div>
  );
};
