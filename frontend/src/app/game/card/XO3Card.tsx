import { useState } from "react";
import "./card.css";
import { HeartSVG } from "../HeartSVG";
import { WordHelper } from "@/helper/word/WordHelper";
import { useRouterHelper } from "@/helper/useRouterHelper";
import { Button } from "@nextui-org/react";
import SVGWrap from "@/components/icon/SVGWrap";
import SVGMapper from "@/components/icon/SVGMapper";

export function XO3Card() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState({
    at: 0,
    index: 0,
  });
  const { param } = useRouterHelper({
    index: 0,
  });
  const wordInstance = WordHelper.useInstance();
  const data = wordInstance[param.index];

  return (
    <div
      className={["card", isOpen ? "flipped" : ""].join(" ")}
      onClick={() => {
        if (isOpen) {
          if (Date.now() - currentIndex.at < 3000) {
            return;
          }
        }
        const distValue = !isOpen;
        setIsOpen(distValue);
        if (distValue) {
          let newIndex = Math.floor(data.list.length * Math.random());
          setCurrentIndex({
            at: Date.now(),
            index: newIndex,
          });
        }
      }}
    >
      <div className="card-inner">
        <div className="card-face front rounded-md bg-pink-300">
          <div className="flex flex-col items-center justify-center gap-4 text-pink-500">
            <HeartSVG />
            <div>翻</div>
          </div>
        </div>
        <div className="card-face back relative rounded-md bg-pink-500 p-4">
          {data.list[currentIndex.index]}
          <div className="absolute right-2 top-2">
            <SVGWrap svg={SVGMapper.materialCloseFilled} />
          </div>
        </div>
      </div>
    </div>
  );
}
