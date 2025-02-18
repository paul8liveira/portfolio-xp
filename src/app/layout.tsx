import type { Metadata } from "next";

import Taskbar from "@/components/taskbar/taskbar";
import { DesktopProvider } from "@/contexts/desktop-context";

import "./globals.css";

export const metadata: Metadata = {
  title: "Win XP Desktop Simulator",
  description:
    "Loved for its stability, aesthetics, and the memorable 'Bliss' wallpaper",
  authors: [{ name: "Paulo Oliveira", url: "https://github.com/paul8liveira" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-hidden">
      <body>
        <DesktopProvider>
          <main className="h-[calc(100vh-32px)] bg-bliss bg-cover">
            {children}
          </main>
          <Taskbar />
        </DesktopProvider>
      </body>
    </html>
  );
}
