"use client";

import { handleOnMouseDown } from "@/utils/drag";

import Image from "next/image";

type IconProps = {
  id: string;
  iconSrc: string;
  x: number;
  y: number;
  onDoubleClick: () => void;
  title?: string;
};

export default function DesktopIcon({
  id,
  iconSrc,
  x,
  y,
  onDoubleClick,
  title,
}: IconProps) {
  return (
    <div
      data-id={id}
      data-x={x}
      data-y={y}
      style={{ left: x, top: y }}
      className="flex flex-col items-center absolute w-24 cursor-pointer hover:bg-blue-100/50 hover:border hover:border-blue-100/80"
      onMouseDown={handleOnMouseDown}
      onDoubleClick={onDoubleClick}
    >
      <Image src={iconSrc} width={40} height={40} alt="icon" />
      {title && (
        <span className="text-white text-[12px] line-clamp-2 drop-shadow-md">
          {title}
        </span>
      )}
    </div>
  );
}
