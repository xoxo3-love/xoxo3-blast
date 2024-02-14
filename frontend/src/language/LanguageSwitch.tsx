"use client";

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import SVGWrap from "@/components/icon/SVGWrap";
import { useEffect } from "react";
import { LanguageHelper, LanguageStore } from "./LanguageHelper";
import SVGMapper from "@/components/icon/SVGMapper";

export default function LanguageSwitch() {
  const { currentLanguage, supportLanguages } = LanguageStore;

  useEffect(() => {
    LanguageHelper.init();
  }, []);

  return (
    <Dropdown>
      <DropdownTrigger>
        {/* <Button variant="bordered">Open Menu</Button> */}
        <Button isIconOnly variant="bordered" className="text-xl" onClick={() => {}}>
          <SVGWrap svg={SVGMapper.materialLanguageFilled} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        items={supportLanguages}
        selectedKeys={[currentLanguage]}
        onAction={(key) => {
          // console.log("ssss", key);
          LanguageStore.currentLanguage = key.toString();
        }}
      >
        {(item) => (
          <DropdownItem
            key={item.value}
            color={item.value === "delete" ? "danger" : "default"}
            className={item.value === "delete" ? "text-danger" : ""}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
