import { Meta, StoryObj } from "@storybook/react";

import { Header } from "./Header";
const meta: Meta<any> = {
  title: "Organisms/Header",
  decorators: [(Story) => <div className="">{<Story />}</div>],
  component: Header,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<any> = {
  args: {},
};
