import { Meta, StoryObj } from "@storybook/react";
import { Box } from "@/stories/Molecules/Box/Box";
import { StudyGif } from "./StudyGif";
const meta: Meta<any> = {
  title: "Atoms/StudyGif",
  decorators: [(Story) => <Box type="normal">{<Story />}</Box>],
  component: StudyGif,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<any> = {
  args: {},
};
