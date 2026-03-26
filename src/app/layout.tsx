import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Lucas Fonseca — Full Stack Developer",
  description:
    "Desenvolvedor Full Stack e técnico de inventário na ArcelorMittal. Curso Sistemas de Informação na PUC-MG. Especializado em React, Next.js, Node.js e análise de dados.",
  keywords: ["Lucas Fonseca", "desenvolvedor", "full stack", "React", "Next.js", "BH", "Belo Horizonte"],
  authors: [{ name: "Lucas Fonseca" }],
  openGraph: {
    title: "Lucas Fonseca — Full Stack Developer",
    description: "Conectando dados, lógica e código.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}