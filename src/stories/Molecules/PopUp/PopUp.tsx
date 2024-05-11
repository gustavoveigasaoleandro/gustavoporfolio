import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { AvatarIcon } from "@/stories/Atoms/Avatar/Avatar";
import { Header } from "@/stories/Atoms/Headers/Header";
import { InputComponent } from "@/stories/Atoms/Input/Input";
import { TextAreaComponent } from "@/stories/Atoms/TextArea/TextArea";

export const PopUp = () => {
  return (
    <Card className="w-5xl h-3xl bg-secondary-default">
      <CardHeader className="flex justify-center items-center w-full  pb-1 m-0">
        <AvatarIcon url="https://avatars.githubusercontent.com/u/55115090?v=4" />
      </CardHeader>
      <CardHeader className="flex justify-center items-center w-full p-0 pb-1">
        <Header color="white" type={"medium"} className=" w-fit">
          Vamos conversar
        </Header>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-5">
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
