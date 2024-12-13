import { Meta, StoryObj } from "@storybook/react";

import { SkillButton } from "./SkillButton";
import { SkillButtonProps } from "@/interfaces/SkillButton";
import FrontendIcon from "@/assets/images/icons/frontendIcon.jpg";
const meta: Meta<SkillButtonProps> = {
  title: "Molecules/SkillButton",
  component: SkillButton,
  decorators: [
    (Story) => <div className=" w-screen h-screen">{<Story />}</div>,
  ],
  argTypes: {
    image: {
      type: "string",
    },
    fallback: {
      type: "string",
    },
  },
};

export default meta;

export const Primary: StoryObj<SkillButtonProps> = {
  args: {
    image: FrontendIcon,
    fallback: "Frontend icon image",
  },
};
