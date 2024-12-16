import React from "react";
import { DrawerWithContent } from "@/stories/Molecules/DrawerWithContent/DrawerWithContent";
import FrontendIcon from "@/assets/images/icons/frontendIcon.svg";
import BackendIcon from "@/assets/images/icons/BackendIcon.svg";
import DevOpsIcon from "@/assets/images/icons/DevOpsIcon.svg";

export const ListSkills = () => {
  const skills = [
    {
      image: FrontendIcon,
      description: "Frontend",
      fallback: "Frontend icon image",
      listItems: [
        {
          text: "React",
          subItems: [
            { text: "React Native: Construindo um App com Native-base" },
            {
              text: "React Native: gerenciando estados globais com Redux Toolkit",
            },
            { text: "React: evolua o seu Design System com TailwindCSS" },

            { text: "React: criando um Design System com TailwindCSS" },

            {
              text: "React JS: crie testes com Jest e Testing Library e garanta o funcionamento do Front-end",
            },
            { text: "React: migrando para TypeScript" },
            {
              text: "React Native: gerenciando estados globais com Redux Toolkit",
            },
          ],
        },

        {
          text: "React Native",
          subItems: [
            { text: "React Native: Construindo um App com Native-base" },
            {
              text: "React Native: gerenciando estados globais com Redux Toolkit",
            },
          ],
        },

        {
          text: "NextJs",
          subItems: [{ text: "Next.js: tour pelo Next.js" }],
        },

        {
          text: "Angular",
          subItems: [
            { text: "Angular 14: evoluindo a aplicação" },
            {
              text: "Angular 14: aplique os conceitos e desenvolva seu primeiro CRUD",
            },
          ],
        },
      ],
    },
    {
      image: BackendIcon,
      description: "Backend",
      fallback: "Backend icon image",
      listItems: [
        {
          text: "Node.js",
          subItems: [
            {
              text: "ORM com NodeJS: avançando nas funcionalidades do Sequelize",
            },
            { text: "ORM com NodeJS: API com Sequelize e MySQL" },
          ],
        },
        {
          text: "Java",
          subItems: [
            { text: "Java: criando a sua primeira aplicação" },
            {
              text: "Java: consumindo API, gravando arquivos e lidando com erros",
            },
            { text: "Java: aplicando a Orientação a Objetos" },
            {
              text: "Java: persistência de dados e consultas com Spring Data JPA",
            },
            {
              text: "Spring Boot 3: aplique boas práticas e proteja uma API Rest",
            },
          ],
        },
        {
          text: "RabbitMQ",
          subItems: [
            {
              text: "Microsserviços na prática: mensageria com RabbitMQ",
            },
          ],
        },
      ],
    },
    {
      image: DevOpsIcon,
      description: "DevOps",
      fallback: "DevOps icon image",
      listItems: [
        {
          text: "AWS",
          subItems: [
            { text: "Amazon VPC: configurando redes na AWS" },
            {
              text: "Amazon EC2: alta disponibilidade e escalabilidade em uma aplicação",
            },
            { text: "Amazon Lightsail: descomplicando a nuvem" },
          ],
        },
        {
          text: "Docker",
          subItems: [{ text: "Docker: criando e gerenciando containers" }],
        },
        {
          text: "NGINX",
          subItems: [
            { text: "NGINX: servidor Web, Proxy Reverso e API Gateway" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="w-screen h-screen min-h-[600px] flex justify-center items-center">
      <DrawerWithContent skills={skills} />
    </div>
  );
};
