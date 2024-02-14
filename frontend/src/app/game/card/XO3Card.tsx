import { useState } from "react";
import "./card.css";
import { HeartSVG } from "../HeartSVG";

export function XO3Card() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={["card", isOpen ? "flipped" : ""].join(" ")}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <div className="card-inner">
        <div className="card-face front rounded-md bg-blue-500">
          <div className="flex flex-col items-center justify-center gap-4">
            <HeartSVG />
            <div>翻</div>
          </div>
        </div>
        <div className="card-face back rounded-md bg-green-500">Back</div>
      </div>
    </div>
  );
}
