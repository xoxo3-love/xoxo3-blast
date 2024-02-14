"use client";
import PageWrap from "@/layout/base/PageWrap";
import { useState } from "react";
import FlyingChessWrap from "./game/FlyingChessWrap";
import GameMenu from "./game/GameMenu";

export default function Home(props: {}) {
  const [reloadAt, setReloadAt] = useState(0);
  return (
    <PageWrap className="">
      <GameMenu />
      {/* <FlyingChessWrap /> */}
    </PageWrap>
  );
}
