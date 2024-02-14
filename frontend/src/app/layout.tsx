import type { Metadata } from "next";
import "./globals.css";
import "animate.css";

import { NextUIApp } from "@/layout/NextUIApp";

export const metadata: Metadata = {
  title: "Xoxo3.love, hugs and kisses in the web3",
  description: "HUGS and KISSES in the web3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NextUIApp>{children}</NextUIApp>
    </html>
  );
}
