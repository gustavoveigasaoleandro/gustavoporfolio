import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarProps } from "@/interfaces/Avatar";

export const AvatarIcon = ({ url }: AvatarProps) => {
  return (
    <Avatar className="w-2xl shadow-2xl h-xl mobile:w-lg mobile:h-h-[93px] m-0 p-0">
      <AvatarImage src={url} />
      <AvatarFallback>GV</AvatarFallback>
    </Avatar>
  );
};
