import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarProps } from "@/interfaces/Avatar";

export const AvatarIcon = ({ url }: AvatarProps) => {
  return (
    <Avatar className="tablet:w-[180px]  tablet:h-[180px] mobile:w-lg mobile:h-[93px] shadow-2xl m-0 p-0">
      <AvatarImage src={url} />
      <AvatarFallback>GV</AvatarFallback>
    </Avatar>
  );
};
