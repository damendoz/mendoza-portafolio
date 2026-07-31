import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { perfil } from "@/content/perfil";
import "./globals.css";

export const metadata: Metadata = {
  title: `${perfil.nombre} — ${perfil.titular}`,
  description: perfil.metaDescripcion,
  openGraph: {
    title: `${perfil.nombre} — ${perfil.titular}`,
    description: perfil.metaDescripcion,
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
