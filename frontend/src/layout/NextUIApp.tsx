"use client";

import * as React from "react";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Header from "./Header";
import { ThemeDarkHelper, ThemeDarkStore } from "@/theme/ThemeDarkHelper";
import RenderOnlyClient from "./RenderOnlyClient";
import Footer from "./Footer";

export function NextUIApp(
  props: Readonly<{
    children: React.ReactNode;
  }>,
) {
  const router = useRouter();

  const { mode } = ThemeDarkStore;

  React.useEffect(() => {
    ThemeDarkHelper.init();
  }, []);

  // 2. Wrap NextUIProvider at the root of your app
  return (
    <body className={["min-h-screen bg-background text-foreground", mode].join(" ")}>
      <RenderOnlyClient>
        <NextUIProvider navigate={router.push}>
          <Header></Header>
          {props.children && props.children}
          <Footer />
        </NextUIProvider>
      </RenderOnlyClient>
    </body>
  );
}
