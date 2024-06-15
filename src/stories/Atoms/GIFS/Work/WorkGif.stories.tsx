import { Meta, StoryObj } from "@storybook/react";
import { Box } from "@/stories/Molecules/Box/Box";
import { WorkGif } from "./WorkGif";
const meta: Meta<any> = {
  title: "Atoms/WorkGif",
  decorators: [(Story) => <Box type="normal">{<Story />}</Box>],
  component: WorkGif,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<any> = {
  args: {},
};
