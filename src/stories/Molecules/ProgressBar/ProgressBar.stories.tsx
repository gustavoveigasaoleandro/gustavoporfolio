import { Meta, StoryObj } from "@storybook/react";

import { ProgressBar } from "./ProgressBar";
const meta: Meta<any> = {
  title: "Molecules/ProgressBar",
  decorators: [(Story) => <div className="w-screen">{<Story />}</div>],
  component: ProgressBar,
  argTypes: {
    progressValue: {
      type: "number",
    },
  },
};

export default meta;

export const Primary: StoryObj<any> = {
  args: {
    progressValue: 72,
  },
};
