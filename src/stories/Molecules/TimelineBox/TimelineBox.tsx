import { Box } from "../Box/Box";
import { TimelineBoxProps } from "@/interfaces/TimelineBox";

export const TimelineBox = ({ children }: TimelineBoxProps) => {
  return (
    <div className=" h-fit tablet:min-h-[100vh] flex justify-center align-middle ">
      <Box type="timeline">{children}</Box>
    </div>
  );
};
