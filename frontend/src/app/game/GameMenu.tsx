import { Button, Listbox, ListboxItem, Select, SelectItem } from "@nextui-org/react";
import { HeartSVG } from "./HeartSVG";
import { LegacyRef, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { WordHelper } from "@/helper/word/WordHelper";
import { ConfettiHelper } from "@/helper/ConfettiHelper";

export default function GameMenu() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const domRef = useRef<Element>();
  const router = useRouter();
  const wordInstance = WordHelper.useInstance();

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
                label="关系阶段"
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
                {wordInstance.map((animal, index) => (
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
        <div className="mt-4">1. 预设不同阶段互动内容，恋爱，情趣，好玩。满足各种口味快速开局。</div>
        <div className="mt-2">2. 持有 $XOXO3，享有会员权限。</div>
        <div className="mt-2">3. 持有 vXOXO3，均分 xoxo3.love 网站收益。</div>
        <div className="mt-2">4. 创作者(待上线)，可铸造 NFT，永久获得打赏。</div>
      </div>
    </div>
  );
}
