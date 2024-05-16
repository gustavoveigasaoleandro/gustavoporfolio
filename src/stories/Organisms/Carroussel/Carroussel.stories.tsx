import { Meta, StoryObj } from "@storybook/react";

import { Carroussel } from "./Carroussel";
const meta: Meta<any> = {
  title: "Organisms/Carroussel",
  decorators: [(Story) => <div className="w-screen h-full">{<Story />}</div>],
  component: Carroussel,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<any> = {
  args: {},
};
