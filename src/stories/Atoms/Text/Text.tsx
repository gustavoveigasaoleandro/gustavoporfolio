import { TextInterface } from "@/interfaces/Text";
import { ColorGenerator } from "@/utils/ColorPallete";

function SizeGenerator({ type }: TextInterface) {
  switch (type) {
    case "small":
      return "desktop:text-2xs mobile:text-5xs";
      break;
    case "medium":
      return "desktop:text-xs mobile:text-4xs";
      break;
    default:
      return "desktop:text-sm mobile:text-3xs";
      break;
  }
}

export const Text = ({
  type = "medium",
  color = "primary",
  children,
  costumStyle,
  font = "",
}: TextInterface) => {
  const size = SizeGenerator({ type });

  const textColor = ColorGenerator({ color });

  return (
    <p className={`${size} ${textColor} ${font} ${costumStyle}`}>{children}</p>
  );
};
