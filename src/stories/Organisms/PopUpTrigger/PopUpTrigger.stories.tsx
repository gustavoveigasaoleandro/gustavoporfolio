import { Meta, StoryObj } from "@storybook/react";

import { PopUpTrigger } from "./PopUpTrigger";
const meta: Meta<any> = {
  title: "Organisms/PopUpTrigger",
  decorators: [(Story) => <div className="">{<Story />}</div>],
  component: PopUpTrigger,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<any> = {
  args: {},
};
