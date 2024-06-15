import { TextInterface } from "@/interfaces/Text";
import { ColorGenerator } from "@/utils/ColorPallete";

function SizeGenerator({ type }: TextInterface) {
  switch (type) {
    case "small":
      return "desktop:text-xs mobile:text-3xs tablet:text-3xs laptop:text-3xs";
      break;
    case "medium":
      return "desktop:text-md mobile:text-3xs tablet:text-2xs laptop:text-2xs";
      break;
    default:
      return "television:text-2xl desktop:text-xl mobile:text-[40px] tablet:text-sm laptop:text-md";
      break;
  }
}

export const HeaderComponent = ({
  type = "large",
  color = "primary",
  children,
  className,
  ...rest
}: TextInterface) => {
  const size = SizeGenerator({ type });

  const textColor = ColorGenerator({ color });

  return (
    <p
      className={`${className} opacity-100 z-10 ${size} ${textColor}`}
      {...rest}
    >
      {children}
    </p>
  );
};
