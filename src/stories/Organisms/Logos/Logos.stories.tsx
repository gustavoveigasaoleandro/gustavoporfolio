import { Meta, StoryObj } from "@storybook/react";
import { Box } from "@/stories/Molecules/Box/Box";
import { Logos } from "./Logos";
const meta: Meta<any> = {
  title: "Organisms/Logos",
  decorators: [(Story) => <Box type="normal">{<Story />}</Box>],
  component: Logos,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<any> = {
  args: {},
};
