import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { AvatarIcon } from "@/stories/Molecules/Avatar/Avatar";
import { HeaderComponent } from "@/stories/Atoms/Headers/Header";
import { InputComponent } from "@/stories/Molecules/Input/Input";
import { TextAreaComponent } from "@/stories/Molecules/TextArea/TextArea";

export const PopUp = () => {
  return (
    <Card className=" shadow-2xl mobile:rounded-[30px] laptop:rounded-[70px]  tablet:w-5xl tablet:h-3xl  mobile:w-[342px] mobile:h-[314px] bg-secondary-default">
      <CardHeader className="flex justify-center items-center w-full  pb-1 m-0">
        <AvatarIcon url="https://avatars.githubusercontent.com/u/55115090?v=4" />
      </CardHeader>
      <CardHeader className="flex justify-center items-center w-full p-0 pb-1">
        <HeaderComponent color="white" type={"medium"} className=" w-fit">
          Vamos conversar
        </HeaderComponent>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col mobile:gap-2 laptop:gap-12">
          <div className="flex w-full justify-evenly items-center gap-4">
            <InputComponent
              id="name"
              name="name"
              label="name"
              type="text"
              placeholder=""
            />

            <InputComponent
              id="email"
              name="email"
              label="email"
              type="email"
              placeholder=""
            />
          </div>
          <div className=" w-full">
            <TextAreaComponent id="subject" name="subject" label="Mensagem" />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
};
