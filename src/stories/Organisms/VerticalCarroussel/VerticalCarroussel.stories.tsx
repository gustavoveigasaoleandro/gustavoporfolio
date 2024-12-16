import { Meta, StoryObj } from "@storybook/react";
import { config } from "react-spring";

import { VerticalCarousel } from "./VerticalCarroussel";
import { EmblaOptionsType } from "embla-carousel";
import { Logos } from "@/stories/Organisms/Logos/Logos";

const OPTIONS: EmblaOptionsType = {
  axis: "y",
};
const slidesData = [
  { key: 1, type: "normal" },
  { key: 2, type: "normal", children: <Logos /> },
  { key: 3, type: "normal" },
];

const meta: Meta<any> = {
  title: "Organisms/VerticalCarroussel",
  decorators: [
    (Story) => (
      <div
        style={{
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
          margin: "0 auto",
          background: "#7FfFbF",
        }}
      >
        {<Story slidesData={slidesData} />}
      </div>
    ),
  ],
  component: VerticalCarousel,
  argTypes: { slidesData },
};

export default meta;

export const Primary: StoryObj<any> = {
  args: { slidesData: slidesData },
};
