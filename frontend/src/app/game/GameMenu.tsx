import { Button, Listbox, ListboxItem, Select, SelectItem } from "@nextui-org/react";
import { HeartSVG } from "./HeartSVG";
import { LegacyRef, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { WordHelper } from "@/language/WordHelper";
import { ConfettiHelper } from "@/helper/ConfettiHelper";

export default function GameMenu() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const domRef = useRef(null);
  const router = useRouter();
  const wordGameInstance = WordHelper.useGameInstance();
  const wordSiteInstance = WordHelper.useInstance();

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4">
        {/* <div className="inline text-4xl font-semibold tracking-tight lg:text-6xl">情侣小游戏</div> */}
        <HeartSVG />
      </div>
      <div className="mt-4"></div>
      <div className="relative flex h-full min-h-[320px] w-full items-center justify-center rounded-2xl bg-gradient-to-tr from-[#FF72E1] to-[#F54C7A] px-8 py-12">
        <div>
          <div className="flex flex-row gap-4">
            <div ref={domRef}>
              <Select
                label={wordSiteInstance.gameMenu.chooiceLabel}
                className="w-[200px]"
                selectedKeys={[selectedIndex + ""]}
                onChange={(e) => {
                  if (!e.target.value) {
                    return;
                  }
                  const value = parseInt(e.target.value);
                  setSelectedIndex(value);

                  if (value > selectedIndex) {
                    if (domRef.current) {
                      ConfettiHelper.showConfetti(domRef.current);
                    }
                  }
                }}
              >
                {wordGameInstance.map((animal, index) => (
                  <SelectItem key={index}>{animal.name}</SelectItem>
                ))}
              </Select>
            </div>
            <Button
              className="h-auto bg-pink-200 text-pink-500"
              onPress={(e) => {
                // showConfetti(e.target);
                // console.log(domRef.current);
                // @ts-ignore
                // showConfetti(domRef.current);
                router.push("/game/card?index=" + selectedIndex);
              }}
            >
              Start
            </Button>
          </div>
        </div>
      </div>

      <div className="text-sm text-foreground-600">
        <div className="mt-2"></div>
        {wordSiteInstance.gameMenu.menuTip.map((item, index) => {
          return (
            <div className="mt-2" key={index}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
