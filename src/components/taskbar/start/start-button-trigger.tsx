import { Trigger } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";

export default function StartButtonTrigger() {
  return (
    <Trigger asChild>
      <button
        className={`
          inline-flex gap-1 px-3 items-center justify-center rounded-r-lg text-white outline-none 
          data-[state=closed]:bg-taskbar-start-closed data-[state=open]:bg-taskbar-start-open`}
      >
        <Image
          src="/svg/icon-windows-xp.svg"
          width={24}
          height={24}
          alt="XP icon"
        />
        start
      </button>
    </Trigger>
  );
}
