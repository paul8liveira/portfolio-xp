"use client";

import { handleOnMouseDown } from "@/utils/drag";

import Image from "next/image";

type IconProps = {
  id: string;
  iconSrc: string;
  draggable?: boolean;
  textColor?: "white" | "black";
  x?: number;
  y?: number;
  onDoubleClick?: () => void;
  title?: string;
};

export default function DesktopIcon({
  id,
  iconSrc,
  x,
  y,
  draggable = true,
  textColor = "white",
  onDoubleClick,
  title,
}: IconProps) {
  const iconClass = () => {
    const base = "flex flex-col items-center w-24";
    return draggable
      ? `absolute ${base} cursor-pointer hover:bg-blue-100/50 hover:border hover:border-blue-100/80`
      : base;
  };
  const textClass = () => {
    const base = "text-center text-[12px] break-all";
    return textColor === "white" ? `${base} text-white` : `${base} text-black`;
  };
  const textShadow = textColor === "white" ? "1px 1px #0f1089" : "none";

  if (!draggable) {
    return (
      <div className={iconClass()} onDoubleClick={onDoubleClick}>
        <Image src={iconSrc} width={40} height={40} alt="icon" />
        {title && (
          <span className={textClass()} style={{ textShadow }}>
            {title}
          </span>
        )}
      </div>
    );
  }

  return (
    <div
      data-id={id}
      data-x={x}
      data-y={y}
      style={{ left: x, top: y }}
      className={iconClass()}
      onMouseDown={handleOnMouseDown}
      onDoubleClick={onDoubleClick}
    >
      <Image src={iconSrc} width={40} height={40} alt="icon" />
      {title && (
        <span className={textClass()} style={{ textShadow }}>
          {title}
        </span>
      )}
    </div>
  );
}
