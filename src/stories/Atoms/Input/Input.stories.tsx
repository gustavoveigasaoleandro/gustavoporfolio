import { Meta, StoryObj } from "@storybook/react";

import { InputComponent } from "./Input";
const meta: Meta<any> = {
  title: "Atoms/Input",
  decorators: [(Story) => <div className=" relative w-5xl ">{<Story />}</div>],
  component: InputComponent,
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