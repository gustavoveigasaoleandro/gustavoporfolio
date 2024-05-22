import { BoxProps } from "@/interfaces/Box";

function SizeGenerator({ type, active }: BoxProps) {
  switch (type) {
    case "normal":
      return ` w-3xl ${active ? "bg-red-300 shadow-2xl" : ""}   border-[1px] border-secondary-default h-xl rounded-3xl mobile:w-[224px] mobile:h-lg `;
      break;
    default:
      return "w-4xl h-[397px] rounded-3xl mobile:w-[306px] mobile:h-[234px]";
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
