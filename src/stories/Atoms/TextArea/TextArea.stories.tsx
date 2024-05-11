import { Meta, StoryObj } from "@storybook/react";

import { TextAreaComponent } from "./TextArea";
const meta: Meta<any> = {
  title: "Atoms/TextArea",
  decorators: [(Story) => <div className=" relative w-5xl ">{<Story />}</div>],
  component: TextAreaComponent,
  argTypes: {
    type: {
      type: "string",
    },
    label: {
      type: "string",
    },
    name: {
      type: "string",
    },
    id: {
      type: "string",
    },
    placeholder: {
      type: "string",
    },
  },
};

export default meta;

export const Primary: StoryObj<any> = {
  args: {
    type: "text",
    label: "Nome",
    name: "teste",
    id: "teste",
    placeholder: "insira o nome aqui",
  },
};
