import { Meta, StoryObj } from "@storybook/react";

import { TextAnimation } from "./TextAnimation";

const meta: Meta<typeof TextAnimation> = {
  title: "Atoms/TextAnimation",
  component: TextAnimation,
  argTypes: {
    text: {
      type: "string",
      control: "text",
      defaultValue: `> Iniciando apresentação...
> Nome: [Seu Nome Aqui]
> Profissão: [Sua Profissão]
> print("Olá Mundo!")`,
      description: "Texto animado que será exibido no componente",
    },
    repeatCount: {
      type: "number",
      control: "number",
      defaultValue: 0,
      description: "Quantidade de vezes que a animação será repetida",
    },
    delay: {
      type: "number",
      control: "number",
      defaultValue: 0,
    },
  },
};

export default meta;

export const Default: StoryObj<typeof TextAnimation> = {
  args: {
    text: `> Iniciando apresentação...
> Nome: [Seu Nome Aqui]
> Profissão: [Sua Profissão]
> print("Olá Mundo!")`,
    repeatCount: 0, // Não repete
  },
};
