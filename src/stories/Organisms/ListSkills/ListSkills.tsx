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
            {
              text: "React: evolua o seu Design System com TailwindCSS",
              link: "https://drive.google.com/file/d/16Voc0x6NxFZYy-5I4RxdTnocHoJFfuCr/view?usp=drive_link",
            },

            {
              text: "React: criando um Design System com TailwindCSS",
              link: "https://drive.google.com/file/d/1ATZ4encImSM0MFTP847Mq59clTRNEUCz/view?usp=sharing",
            },

            {
              text: "React JS: crie testes com Jest e Testing Library e garanta o funcionamento do Front-end",
              link: "https://drive.google.com/file/d/1BD79h9vyoc7m9H9ll5So2PS-4pwFo6CV/view?usp=drive_link",
            },
            {
              text: "React: migrando para TypeScript",
              link: "https://drive.google.com/file/d/1gkl2xxyXqvx-iDS7Djb0RzQSkLctSYtc/view?usp=drive_link",
            },
          ],
        },

        {
          text: "React Native",
          subItems: [
            {
              text: "React Native: gerenciando estados globais com Redux Toolkit",
              link: "https://drive.google.com/file/d/1YOEjhzLDNmWINk-T_7BdxcQwkAz7g6C-/view?usp=drive_link",
            },
            {
              text: "React Native: Construindo um App com Native-base",
              link: "https://drive.google.com/file/d/1YOEjhzLDNmWINk-T_7BdxcQwkAz7g6C-/view?usp=drive_link",
            },
            {
              text: "React Native: gerenciando estados globais com Redux Toolkit",
              link: "https://drive.google.com/file/d/1KPVeadOPW-Tgnso0XA_xc2eHue8meqlD/view?usp=drive_link",
            },
          ],
        },

        {
          text: "NextJs",
          subItems: [
            {
              text: "Next.js: tour pelo Next.js",
              link: "https://drive.google.com/file/d/1Gudv_yqUkEfgP5X7T_G5oW4_E3j8A5h_/view?usp=drive_link",
            },
          ],
        },

        {
          text: "Angular",
          subItems: [
            {
              text: "Angular 14: evoluindo a aplicação",
              link: "https://drive.google.com/file/d/1C_8fs3nfeNLFJRmFT1zxQJSmX2YDcd_s/view?usp=drive_link",
            },
            {
              text: "Angular 14: aplique os conceitos e desenvolva seu primeiro CRUD",
              link: "https://drive.google.com/file/d/1em-UzJeHucSXSbZcqCEUYgiQIIy_5Jzg/view?usp=drive_link",
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
              link: "https://drive.google.com/file/d/1hAOBRjzu1-I5VCXM02VYMfF3Q6rmGRgA/view?usp=drive_link",
            },
            {
              text: "ORM com NodeJS: API com Sequelize e MySQL",
              link: "https://drive.google.com/file/d/1slPyZJC-KRrgnVOfhIlSSvAFS1SdYuyT/view?usp=drive_link",
            },
            {
              text: "Swagger: documentando suas APIs",
              link: "https://drive.google.com/file/d/1q4H6_odaQviNtDC2hln7cvuQGZ3u73cu/view?usp=drive_link",
            },
          ],
        },
        {
          text: "Java",
          subItems: [
            {
              text: "Java: criando a sua primeira aplicação",
              link: "https://drive.google.com/file/d/10thqGXNeHRKUrcJKsAQvle5gPpnT79le/view?usp=drive_link",
            },
            {
              text: "Java: consumindo API, gravando arquivos e lidando com erros",
              link: "https://drive.google.com/file/d/1PZWj70AJ1CRiglD6Cygr-Qj4py8we7bC/view?usp=drive_link",
            },
            {
              text: "Java: aplicando a Orientação a Objetos",
              link: "https://drive.google.com/file/d/1PZWj70AJ1CRiglD6Cygr-Qj4py8we7bC/view?usp=drive_link",
            },
            {
              text: "Java: persistência de dados e consultas com Spring Data JPA",
              link: "https://drive.google.com/file/d/1WCNy2tVxbmzSX908b8f0sSKztbH94YF0/view?usp=drive_link",
            },
            {
              text: "Spring Boot 3: aplique boas práticas e proteja uma API Rest",
              link: "https://drive.google.com/file/d/1mKvYbuUpssoYEyvLqmuuFFzec6eoaWxE/view?usp=drive_link",
            },
          ],
        },
        {
          text: "RabbitMQ",
          subItems: [
            {
              text: "Microsserviços na prática: mensageria com RabbitMQ",
              link: "https://drive.google.com/file/d/14CXqKTF0cYlt9iE9L-2Ge7XSF0p-zWx5/view?usp=drive_link",
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
            {
              text: "Amazon VPC: configurando redes na AWS",
              link: "https://drive.google.com/file/d/1IzEJ_x3ucHLzwvOjbGgzv2MDriqrSfat/view?usp=drive_link",
            },
            {
              text: "Amazon EC2: alta disponibilidade e escalabilidade em uma aplicação",
              link: "https://drive.google.com/file/d/1yvFKIGprLMEIFT3wgfmIxcxiPC5Dg0k6/view?usp=drive_link",
            },
            {
              text: "Amazon Lightsail: descomplicando a nuvem",
              link: "https://drive.google.com/file/d/12Qaeb2osTFA_VhQjcor_1hVuA_uCE4qE/view?usp=drive_link",
            },
          ],
        },
        {
          text: "Docker",
          subItems: [
            {
              text: "Docker: criando e gerenciando containers",
              link: "https://drive.google.com/file/d/1eqfuTKxk2nuVdpdZlHWuJMIUMOm1EyEe/view?usp=drive_link",
            },
          ],
        },
        {
          text: "NGINX",
          subItems: [
            {
              text: "NGINX: servidor Web, Proxy Reverso e API Gateway",
              link: "https://drive.google.com/file/d/114hruqKOptcspkfF_BHXvbrYr47xY6nv/view?usp=drive_link",
            },
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
