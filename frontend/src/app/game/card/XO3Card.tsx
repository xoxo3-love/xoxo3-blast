import { useState } from "react";
import "./card.css";
import { HeartSVG } from "../HeartSVG";
import { WordHelper } from "@/language/WordHelper";
import { useRouterHelper } from "@/helper/useRouterHelper";
import { Button } from "@nextui-org/react";
import SVGWrap from "@/components/icon/SVGWrap";
import SVGMapper from "@/components/icon/SVGMapper";
import { ConfettiHelper } from "@/helper/ConfettiHelper";

export function XO3Card() {
  const [isOpen, setIsOpen] = useState(false);
  const [canClose, setCanClose] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { param } = useRouterHelper({
    index: 0,
  });
  const wordInstance = WordHelper.useGameInstance();
  const wordSiteInstance = WordHelper.useInstance();
  const data = wordInstance[param.index];

  return (
    <div
      className={["card cursor-pointer select-none", isOpen ? "flipped" : ""].join(" ")}
      onClick={() => {
        if (isOpen) {
          if (!canClose) {
            return;
          }
        }

        const distValue = !isOpen;
        setIsOpen(distValue);
        if (distValue) {
          let newIndex = Math.floor(data.list.length * Math.random());
          setCurrentIndex(newIndex);

          setCanClose(false);
          setTimeout(() => {
            setCanClose(true);
          }, 3000);

          ConfettiHelper.showConfetti(document.getElementById("show_card"));
        }
      }}
    >
      <div className="card-inner">
        <div className="card-face front rounded-md bg-pink-300">
          <div className="flex flex-col items-center justify-center gap-4 text-pink-500">
            <HeartSVG />
            <div>{wordSiteInstance.game.tap}</div>
          </div>
        </div>
        <div className="card-face back relative rounded-md bg-pink-500 p-4" id="show_card">
          {data.list[currentIndex]}
          <div className={`absolute right-2 top-2 ${canClose ? "" : "hidden"}`}>
            <SVGWrap svg={SVGMapper.materialFlipCameraAndroidFilled} />
          </div>
        </div>
      </div>
    </div>
  );
}
