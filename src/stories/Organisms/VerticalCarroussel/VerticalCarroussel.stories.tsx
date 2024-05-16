import { Meta, StoryObj } from "@storybook/react";

import { EmblaCarousel } from "./VerticalCarroussel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = {
  axis: "y",
};
const slidesData = [{ type: "normal" }, { type: "normal" }, { type: "normal" }];

const meta: Meta<any> = {
  title: "Organisms/VerticalCarroussel",
  decorators: [
    (Story) => (
      <div className="flex w-screen h-screen align-middle justify-center">
        {<Story />}
      </div>
    ),
  ],
  component: EmblaCarousel,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<any> = {
  args: {
    slidesData: slidesData, // Directly pass the array
    options: OPTIONS, // Directly pass the options object
  },
};
