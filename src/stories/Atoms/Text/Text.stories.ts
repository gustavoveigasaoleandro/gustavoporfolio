import { Meta, StoryObj } from "@storybook/react";

import { Text } from "./Text";
import { TextInterface } from "@/interfaces/Text";
const meta: Meta<TextInterface> = {
  title: "Atoms/Text",
  component: Text,
  argTypes: {
    type: {
      type: "string",
      control: "select",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    color: {
      type: "string",
      control: "select",
      options: ["primary", "secondary", "white"],
      defaultValue: "primary",
    },
  },
};

export default meta;

export const Primary: StoryObj<TextInterface> = {
  args: {
    children: "teste",
  },
};

export const Secondary: StoryObj<TextInterface> = {
  args: {
    color: "secondary",
    children: "teste",
  },
};
