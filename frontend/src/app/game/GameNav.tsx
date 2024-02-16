import React from "react";
import {
  Breadcrumbs,
  BreadcrumbItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { WordHelper } from "@/language/WordHelper";

export const ChevronDownIcon = (props: { className?: string }) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function GameNav() {
  const wordSiteInstance = WordHelper.useInstance();

  return (
    <Breadcrumbs
      itemClasses={{
        item: "px-2",
        separator: "px-0",
      }}
    >
      <BreadcrumbItem href="/">{wordSiteInstance.nav.home}</BreadcrumbItem>
      <BreadcrumbItem
        classNames={{
          item: "px-0",
        }}
      >
        <Dropdown>
          <DropdownTrigger>
            <Button
              className="h-6 pr-2 text-small"
              endContent={<ChevronDownIcon className="text-default-500" />}
              radius="full"
              size="sm"
              variant="light"
            >
              {wordSiteInstance.gameTye.poker}
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Routes" disabledKeys={["flyingChess", "lotteryWheel"]}>
            <DropdownItem key="poker">{wordSiteInstance.gameTye.poker}</DropdownItem>
            <DropdownItem key="flyingChess">{wordSiteInstance.gameTye.flyingChess}</DropdownItem>
            <DropdownItem key="lotteryWheel">{wordSiteInstance.gameTye.lotteryWheel}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}
