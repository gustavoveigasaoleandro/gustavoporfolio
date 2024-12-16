import { Meta, StoryObj } from "@storybook/react";
import { Box } from "@/stories/Molecules/Box/Box";
import { TimelineComponent } from "./Timeline";

const meta: Meta<any> = {
  title: "Organisms/Timeline",
  decorators: [(Story) => <div className=" w-100vw h-50vh">{<Story />}</div>],
  component: TimelineComponent,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<any> = {
  args: {},
};
