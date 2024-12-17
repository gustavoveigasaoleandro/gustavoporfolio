import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { AvatarIcon } from "@/stories/Molecules/Avatar/Avatar";
import { HeaderComponent } from "@/stories/Atoms/Headers/Header";
import { InputComponent } from "@/stories/Molecules/Input/Input";
import { TextAreaComponent } from "@/stories/Molecules/TextArea/TextArea";
import SendIcon from "@mui/icons-material/Send";
import { PopUpProps } from "@/interfaces/Popup";
import { Button } from "@mui/material";

export const PopUp = ({ closeFunction }: PopUpProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Função para lidar com mudanças nos inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Função para enviar mensagem ao WhatsApp com link wa.me
  const handleSendWhatsApp = () => {
    const { name, email, message } = formData;

    // Monta o texto da mensagem
    const text = encodeURIComponent(
      `Olá, meu nome é ${name}. ` +
        `Meu email é: ${email}. ` +
        `Mensagem: ${message}`
    );

    // Link no formato wa.me
    const whatsappLink = `https://wa.me/5515997723050?text=${text}`;

    // Abre o link em uma nova guia
    window.open(whatsappLink, "_blank");
  };

  return (
    <Card className="no-scrollbar relative shadow-2xl tablet:rounded-[30px] laptop:rounded-[40px] tablet:w-5xl tablet:h-3xl mobile:w-screen mobile:h-full mobile:overflow-y-auto bg-secondary-default">
      {/* Header com botão de fechar */}
      <CardHeader className="flex justify-between items-center w-full mobile:p-4 tablet:pb-1">
        <AvatarIcon url="https://avatars.githubusercontent.com/u/55115090?v=4" />
        <button
          onClick={closeFunction}
          aria-label="Fechar"
          className="absolute top-4 right-4 bg-primary-default text-white p-2 rounded cursor-pointer"
        >
          Fechar
        </button>
      </CardHeader>

      {/* Título */}
      <CardHeader className="flex justify-center items-center w-full p-0 pb-1">
        <HeaderComponent color="white" type={"medium"} className="w-fit">
          Vamos conversar
        </HeaderComponent>
      </CardHeader>

      {/* Conteúdo */}
      <CardContent>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col mobile:gap-4 laptop:gap-12"
        >
          <div className="flex w-full mobile:flex-col tablet:flex-row justify-evenly items-center gap-4">
            <InputComponent
              id="name"
              name="name"
              label="Nome"
              type="text"
              placeholder="Digite seu nome"
              onChange={handleChange}
            />
            <InputComponent
              id="email"
              name="email"
              label="Email"
              type="tel"
              placeholder="Digite seu email"
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <TextAreaComponent
              id="message"
              name="message"
              label="Mensagem"
              placeholder="Digite sua mensagem"
              onChange={handleChange}
            />
          </div>

          <Button
            onClick={handleSendWhatsApp}
            className="bg-primary-default"
            variant="contained"
            endIcon={<SendIcon />}
          >
            Enviar
          </Button>
        </form>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
};
