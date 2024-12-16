import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/style/globals.css";
import { LoadingProvider } from "@/context/LoadingContext";
import { LoadingScreen } from "@/stories/Organisms/LoadingScreen/LoadingScreen";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://gustavoportfolio.vercel.app"),
  title: "Meu Portfólio",
  description: "Portfólio de Gustavo Veiga São Leandro",
  icons: {
    icon: "/favicon.ico", // Caminho do favicon dentro da pasta public
  },
  openGraph: {
    title: "Meu Portfólio",
    description: "Conheça os projetos e habilidades de Gustavo Veiga.",

    images: [
      {
        url: "/assets/images/logo/logo.png", // Caminho relativo ao public
        width: 1200,
        height: 630,
        alt: "Imagem de destaque do portfólio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Adicione a meta tag diretamente aqui */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        {" "}
        <LoadingProvider>
          <LoadingScreen />
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
