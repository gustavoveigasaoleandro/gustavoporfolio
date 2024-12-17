import { Text } from "../../Atoms/Text/Text";
import { Label } from "@/components/ui/label";
import { InputProps } from "@/interfaces/Input";
import { Textarea } from "@/components/ui/textarea";
import { TextAreaProps } from "@/interfaces/TextArea";

export const TextAreaComponent = ({
  label,
  id,
  name,
  onChange,
  ...rest
}: TextAreaProps) => {
  return (
    <div className="grid w-full items-center gap-2">
      <Label htmlFor={id}>
        <Text color="white" type="medium">
          {"{"} {label} {"}"}
        </Text>
      </Label>
      <Textarea
        className="text-3xs resize-none bg-light-default h-[113px] w-full mobile:h-[20vh]"
        name={name}
        id={id}
        placeholder=""
        onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>} // Forçamos o tipo correto
        {...rest}
      />
    </div>
  );
};
