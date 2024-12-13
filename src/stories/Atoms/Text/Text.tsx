import { TextInterface } from "@/interfaces/Text";
import { ColorGenerator } from "@/utils/ColorPallete";

function SizeGenerator({ type }: TextInterface) {
  switch (type) {
    case "small":
      return "desktop:text-3xs mobile:text-5xs tablet:text-4xs";
      break;
    case "medium":
      return "desktop:text-xs mobile:text-4xs tablet:text-3xs";
      break;
    default:
      return "desktop:text-sm mobile:text-3xs tablet:text-2xs";
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
    <p
      data-testid="Text-component"
      className={`${size}  z-10 ${textColor} ${font} ${costumStyle}`}
    >
      {children}
    </p>
  );
};
