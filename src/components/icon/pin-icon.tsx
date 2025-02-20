"use client";

import Image from "next/image";

type IconProps = {
  iconSrc: string;
  onClick: () => void;
};

export default function PinIcon({ iconSrc, onClick }: IconProps) {
  return (
    <button onClick={onClick}>
      <Image src={iconSrc} width={16} height={16} alt="icon" />
    </button>
  );
}
