"use client";
import PageWrap from "@/layout/base/PageWrap";
import { useState } from "react";
import FlyingChessWrap from "./game/FlyingChessWrap";

export default function Home(props: {}) {
  const [reloadAt, setReloadAt] = useState(0);
  return (
    <PageWrap className="">
      <FlyingChessWrap />
    </PageWrap>
  );
}
