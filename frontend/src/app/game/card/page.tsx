"use client";
import PageWrap from "@/layout/base/PageWrap";
import { useState } from "react";
import { XO3Card } from "./XO3Card";
import { WordHelper } from "@/language/WordHelper";
import GameNav from "../GameNav";

export default function Home(props: {}) {
  const wordSiteInstance = WordHelper.useInstance();

  return (
    <PageWrap className="">
      <GameNav />
      <div className="mt-4 flex flex-col items-center justify-center">
        <XO3Card></XO3Card>
        <div className="text-sm text-foreground-600">
          <div className="mt-4">{wordSiteInstance.game.gameTip}</div>
        </div>
      </div>
    </PageWrap>
  );
}
