import { Text } from "../../Atoms/Text/Text";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputProps } from "@/interfaces/Input";

export const InputComponent = ({
  label,
  type = "text",
  id,
  name,
  placeholder = "",
  ...rest
}: InputProps) => {
  return (
    <div className="grid tablet:w-[47%] mobile:w-full items-center gap-2">
      <Label htmlFor={id}>
        <Text type="medium" color="white">
          {"{"} {label} {"}"}
        </Text>
      </Label>
      <Input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        {...rest}
        className=" bg-light-default shadow-2xl laptop:rounded-[9px] mobile:rounded-[5px] mobile:h-[50px] laptop:h-[52px] w-full tablet:text-3xs mobile:text-4xs"
      />
    </div>
  );
};
