import { Text } from "../Text/Text";
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
    <div className="grid w-[47%]  items-center gap-5">
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
        className=" bg-light-default aspect-square rounded-xl w-full text-3xs mobile:text-4xs"
      />
    </div>
  );
};
