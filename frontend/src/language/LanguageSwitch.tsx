"use client";

import { Button } from "@nextui-org/react";
import SVGWrap from "@/components/icon/SVGWrap";
import { useEffect } from "react";
import { LanguageHelper, LanguageStore } from "./LanguageHelper";
import SVGMapper from "@/components/icon/SVGMapper";

export default function LanguageSwitch() {
  const { currentLanguage } = LanguageStore;

  useEffect(() => {
    LanguageHelper.init();
  }, []);

  return (
    <Button isIconOnly className="text-xl" onClick={() => {}}>
      <SVGWrap svg={SVGMapper.materialLanguageFilled} />
    </Button>
  );
}
