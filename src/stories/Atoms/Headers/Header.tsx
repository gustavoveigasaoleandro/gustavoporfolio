import { TextInterface } from "@/interfaces/Text";
import { ColorGenerator } from "@/utils/ColorPallete";

function SizeGenerator({ type }: TextInterface) {
  switch (type) {
    case "small":
      return "text-xs mobile:text-3xs";
      break;
    case "medium":
      return "text-md mobile:text-2xs";
      break;
    default:
      return "text-xl mobile:text-md";
      break;
  }
}

export const Header = ({
  type = "medium",
  color = "primary",
  children,
  className,
  ...rest
}: TextInterface) => {
  const size = SizeGenerator({ type });

  const textColor = ColorGenerator({ color });

  return (
    <p className={`${className} ${size} ${textColor}`} {...rest}>
      {children}
    </p>
  );
};
