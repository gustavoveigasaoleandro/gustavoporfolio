import { Meta, StoryObj } from "@storybook/react";
import { Box } from "@/stories/Molecules/Box/Box";
import { Project } from "./Project";
import { ProjectProps } from "@/components/ui/project";
import JoaoPorfolio from "@/assets/images/Projects/Projeto _João.png"; // Ajuste o caminho conforme necessário

const meta: Meta<ProjectProps> = {
  title: "Molecules/Project",
  decorators: [(Story) => <Box type="big">{<Story />}</Box>],
  component: Project,
  argTypes: {
    imageSrc: {
      control: {
        type: "text",
      },
      description: "The source of the image.",
    },
    imageAlt: {
      control: {
        type: "text",
      },
      description: "The alt text for the image.",
    },
    description: {
      control: {
        type: "text",
      },
      description: "The description of the project.",
    },
    title: {
      control: {
        type: "text",
      },
      description: "The title of the project.",
    },
    buttonText: {
      control: {
        type: "text",
      },
      description: "The text of the button.",
    },
    buttonLink: {
      control: {
        type: "text",
      },
      description: "The link that the button points to.",
    },
  },
};

export default meta;

export const Primary: StoryObj<ProjectProps> = {
  args: {
    imageSrc: JoaoPorfolio,
    imageAlt: "Image from John website",
    title: "Web: Portfólio",
    description:
      "Portfólio criado para um cinematógrafo exibir e compartilhar seus projetos.",
    buttonText: "acessar",
    buttonLink: "https://example.com",
  },
};
