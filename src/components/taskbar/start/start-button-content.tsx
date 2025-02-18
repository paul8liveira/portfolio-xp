import { Content } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";

export default function StartButtonContent() {
  return (
    <Content className="start-menu drop-shadow-lg" side="top" sideOffset={1}>
      <header className="flex items-center gap-3 p-3 bg-start-menu-header">
        <Image
          src="/png/me.png"
          className="border-2 border-white/80 rounded-lg"
          width={60}
          height={60}
          alt="User picture"
        />
        <span
          className="font-bold text-base text-white"
          style={{ textShadow: "1px 1px #0f1089" }}
        >
          Paulo Oliveira
        </span>
      </header>
      <div className="row-span-7 row-start-3 bg-white">menu1</div>
      <div className="row-span-7 row-start-3">menu2</div>
      <div className="flex items-center justify-end gap-2 pr-3 col-span-2 bg-start-menu-footer">
        <button className="flex items-center gap-1">
          <Image
            src="/png/logoff.png"
            width={24}
            height={24}
            alt="Logoff icon"
          />
          <span className="text-white text-xs font-thin">Log Off</span>
        </button>
        <button className="flex items-center gap-1">
          <Image
            src="/png/turnoff.png"
            width={24}
            height={24}
            alt="Turn off icon"
          />

          <span className="text-white text-xs font-thin">
            Turn Off Computer
          </span>
        </button>
      </div>
    </Content>
  );
}
