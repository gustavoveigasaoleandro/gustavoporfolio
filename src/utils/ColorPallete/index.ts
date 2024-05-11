import { TextInterface } from "@/interfaces/Text";

export function ColorGenerator({ color = "primary" }: TextInterface) {
  switch (color) {
    case "primary":
      return "text-primary-default";
      break;
    case "secondary":
      return "text-secondary-default";
      break;
    default:
      return "text-white";
      break;
  }
}
