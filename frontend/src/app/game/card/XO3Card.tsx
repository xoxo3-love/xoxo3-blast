import { useState } from "react";
import "./card.css";
import { HeartSVG } from "../HeartSVG";
import { WordHelper } from "@/helper/word/WordHelper";
import { useRouterPage } from "@/helper/useRouterHelper";

export function XO3Card() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { param } = useRouterPage({
    index: 0,
  });
  const wordInstance = WordHelper.useInstance();
  const data = wordInstance[param.index];

  return (
    <div
      className={["card", isOpen ? "flipped" : ""].join(" ")}
      onClick={() => {
        const distValue = !isOpen;
        setIsOpen(distValue);
        if (distValue) {
          let newIndex = Math.floor(data.list.length * Math.random());
          setCurrentIndex(newIndex);
        }
      }}
    >
      <div className="card-inner">
        <div className="card-face front rounded-md bg-pink-300">
          <div className="flex flex-col items-center justify-center gap-4">
            <HeartSVG />
            <div>翻</div>
          </div>
        </div>
        <div className="card-face back rounded-md bg-pink-500">{data.list[currentIndex]}</div>
      </div>
    </div>
  );
}
