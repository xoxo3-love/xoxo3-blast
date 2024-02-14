import { Button, Listbox, ListboxItem, Select, SelectItem } from "@nextui-org/react";
import { configZH } from "../airdrop/word/zh";
import { HeartSVG } from "./HeartSVG";

export default function GameMenu() {
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
            <Select label="关系阶段" className="w-[200px]">
              {configZH.map((animal) => (
                <SelectItem key={animal.name} value={animal.name}>
                  {animal.name}
                </SelectItem>
              ))}
            </Select>
            <Button className="h-auto bg-pink-200 text-pink-900">Start</Button>
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
