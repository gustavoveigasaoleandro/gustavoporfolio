import { Meta, StoryObj } from "@storybook/react";

import { AvatarIcon } from "./Avatar";
import { url } from "inspector";
const meta: Meta<any> = {
  title: "Molecules/Avatar",
  decorators: [(Story) => <div className="">{<Story />}</div>],
  component: AvatarIcon,
  argTypes: {
    url: {
      type: "string",
      defaultValue: "https://avatars.githubusercontent.com/u/55115090?v=4",
    },
  },
};

export default meta;

export const Primary: StoryObj<any> = {
  args: {
    url: "https://avatars.githubusercontent.com/u/55115090?v=4",
  },
};
