
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "@fontsource/oxanium/800.css";

export const metadata: Metadata = {
  title: "VECTOR | Robotics Team",
  description: "TSTU × VECTOR Robotics Team",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
