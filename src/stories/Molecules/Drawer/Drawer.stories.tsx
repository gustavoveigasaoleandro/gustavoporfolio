import { Meta, StoryObj } from "@storybook/react";

import { DrawerComponent } from "./Drawer";
const meta: Meta<any> = {
  title: "Molecules/Drawer",
  decorators: [(Story) => <div className="">{<Story />}</div>],
  component: DrawerComponent,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<any> = {
  args: {},
};
