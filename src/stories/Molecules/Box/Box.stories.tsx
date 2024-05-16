import { Meta, StoryObj } from "@storybook/react";

import { Box } from "./Box";
import { BoxProps } from "@/interfaces/Box";
const meta: Meta<BoxProps> = {
  title: "Molecules/Box",
  component: Box,
  argTypes: {
    type: {
      type: "string",
      control: "select",
      options: ["normal", "big"],
      defaultValue: "big",
    },
  },
};

export default meta;

export const Primary: StoryObj<BoxProps> = {
  args: {},
};

export const Secondary: StoryObj<BoxProps> = {
  args: {
    type: "normal",
  },
};
