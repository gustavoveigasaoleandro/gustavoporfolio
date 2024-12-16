import { Meta, StoryObj } from "@storybook/react";
import { ListSkills } from "./ListSkills";

const meta: Meta = {
  title: "Organisms/ListSkills",
  component: ListSkills,
  decorators: [
    (Story) => <div className="">{<Story />}</div>, // Adicione estilos ou contextos necessários
  ],
};

export default meta;

export const Default: StoryObj = {
  render: () => <ListSkills />, // Renderização direta do componente
};
