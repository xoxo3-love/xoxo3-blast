"use client";

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import SVGWrap from "@/components/icon/SVGWrap";
import { useEffect } from "react";
import { LanguageHelper, LanguageStore, TLanguage } from "./LanguageHelper";
import SVGMapper from "@/components/icon/SVGMapper";

export default function LanguageSwitch() {
  const { currentLanguage, supportLanguages, currentLanguageItem } = LanguageStore;

  useEffect(() => {
    LanguageHelper.init();
  }, []);

  return (
    <Dropdown>
      <DropdownTrigger>
        {/* <Button variant="bordered">Open Menu</Button> */}
        <Button isIconOnly variant="bordered" onClick={() => {}}>
          {/* <SVGWrap svg={SVGMapper.materialLanguageFilled} /> */}
          {currentLanguageItem.short}
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
          LanguageHelper.switch(key.toString());
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
