import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarProps } from "@/interfaces/Avatar";

export const AvatarIcon = ({ url }: AvatarProps) => {
  return (
    <Avatar className="desktop:w-2xl  desktop:h-xl mobile:w-lg mobile:h-[93px] shadow-2xl m-0 p-0">
      <AvatarImage src={url} />
      <AvatarFallback>GV</AvatarFallback>
    </Avatar>
  );
};
