import { Meta, StoryObj } from "@storybook/react";

import { SkillMeter } from "./SkillMeter";
const meta: Meta<any> = {
  title: "Organisms/SkillMeter",
  decorators: [
    (Story) => <div className="bg-primary-default">{<Story />}</div>,
  ],
  component: SkillMeter,
  argTypes: {
    progress: {
      type: "number",
    },
    skill: {
      type: "string",
    },
  },
};

export default meta;

export const Primary: StoryObj<any> = {
  args: {
    progress: 75,
    skill: "html",
  },
};
