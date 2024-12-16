"use client";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimelineBox } from "@/stories/Molecules/TimelineBox/TimelineBox";
import { Text } from "@/stories/Atoms/Text/Text";
import CollegeImg from "@/assets/images/icons/college.svg";
import InternImg from "@/assets/images/icons/internship.svg";
import Graduation from "@/assets/images/icons/graduation.svg";
import FirstJob from "@/assets/images/icons/FirstJob.svg";
import EngecompImg from "@/assets/images/icons/EngecompJob.svg";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

export const TimelineComponent = () => {
  const isMobile = useMediaQuery("(max-width:600px)"); // Define mobile para telas menores que 600px

  return (
    <Timeline position={isMobile ? "left" : "alternate"}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {" "}
          <TimelineBox>
            <Text
              type="small"
              color="secondary"
              costumStyle="font-bold w-[90%]  text-left"
            >
              2019 - Ingresso na faculdade de análise e desenvolvimento de
              sistemas
            </Text>
            <Image alt="college image" src={CollegeImg} className=" w-[90%]" />
            <Text type="small" costumStyle="  w-[90%] text-left">
              Na UNIP, cursei Análise e Desenvolvimento de Sistemas com foco em
              conceitos introdutórios. Aprendi lógica de programação, banco de
              dados, orientação a objetos e desenvolvimento em C e C#, base para
              projetos e soluções tecnológicas.
            </Text>
          </TimelineBox>{" "}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineBox>
            <Text
              type="small"
              color="secondary"
              costumStyle="font-bold w-[90%]  text-left"
            >
              2021 - Tecmed
            </Text>
            <Image alt="Intern image" src={InternImg} className=" w-[90%]" />
            <Text type="small" costumStyle="  w-[90%] text-left">
              Na Tecmed, estagiei em TI, atuando com hardware, gestão de
              servidores e redes. Realizei manutenções, configurei equipamentos
              e garanti o funcionamento da infraestrutura tecnológica.
            </Text>
          </TimelineBox>{" "}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {" "}
          <TimelineBox>
            <Text
              type="small"
              color="secondary"
              costumStyle="font-bold w-[90%]  text-left"
            >
              2021 - Formatura
            </Text>
            <Image
              alt="graduation image"
              src={Graduation}
              className=" w-[90%]  border-red-500"
            />
            <Text type="small" costumStyle="  w-[90%] text-left">
              Formei-me na UNIP em Análise e Desenvolvimento de Sistemas em
              meados de 2021, saindo com grande interesse tanto no front quanto
              no back, o que me levou a futuros estudos para me tornar um
              desenvolvedor fullstack.
            </Text>
          </TimelineBox>{" "}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {" "}
          <TimelineBox>
            <Text
              type="small"
              color="secondary"
              costumStyle="font-bold w-[90%]  text-left"
            >
              2022 FirstPag - Meu primeiro trabalho como desenvolvedor
            </Text>
            <Image alt="college image" src={FirstJob} className=" w-[90%]" />
            <Text type="small" costumStyle="  w-[90%] text-left">
              Meu primeiro trabalho como desenvolvedor, foi focado no frontend
              em um projeto de banco digital, usando React. Criei interfaces
              funcionais, otimizando a experiência do usuário.
            </Text>
          </TimelineBox>{" "}
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
        </TimelineSeparator>
        <TimelineContent>
          {" "}
          <TimelineBox>
            <Text
              type="small"
              color="secondary"
              costumStyle="font-bold w-[90%]  text-left"
            >
              2022 -2024 - Engecomp
            </Text>
            <Image alt="college image" src={EngecompImg} className=" w-[90%]" />
            <Text type="small" costumStyle="  w-[90%] text-left">
              Na Engecomp trabalhei com desenvolvedores seniors, onde aprendi
              boas práticas, participei de projetos complexos e evoluí
              profissionalmente.
            </Text>
          </TimelineBox>{" "}
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
