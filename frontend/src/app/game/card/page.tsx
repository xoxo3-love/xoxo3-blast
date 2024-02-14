"use client";
import PageWrap from "@/layout/base/PageWrap";
import { useState } from "react";
import { XO3Card } from "./XO3Card";

export default function Home(props: {}) {
  return (
    <PageWrap className="">
      <div className="flex items-center justify-center">
        <XO3Card></XO3Card>
      </div>
    </PageWrap>
  );
}
