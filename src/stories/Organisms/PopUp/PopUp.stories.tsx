import { Meta, StoryObj } from "@storybook/react";

import { PopUp } from "./PopUp";
const meta: Meta<any> = {
  title: "Organisms/PopUp",
  decorators: [(Story) => <div className="">{<Story />}</div>],
  component: PopUp,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<any> = {
  args: {},
};
