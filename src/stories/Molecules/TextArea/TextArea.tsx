import { Text } from "../../Atoms/Text/Text";
import { Label } from "@/components/ui/label";
import { InputProps } from "@/interfaces/Input";
import { Textarea } from "@/components/ui/textarea";

export const TextAreaComponent = ({ label, id, name }: InputProps) => {
  return (
    <div className="grid w-full  items-center gap-1">
      <Label htmlFor={id}>
        <Text color="white" type="medium">
          {"{"} {label} {"}"}
        </Text>
      </Label>
      <Textarea
        className=" text-3xs resize-none  bg-light-default h-[113px]  w-full mobile:h-[48px] "
        name={name}
        id={id}
        placeholder=""
      />
    </div>
  );
};
