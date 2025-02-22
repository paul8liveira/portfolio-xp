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
      <div className="row-span-7 row-start-3 p-2 space-y-2 bg-white">
        <div className="flex flex-col h-full gap-y-2">
          <div className="flex flex-row items-center gap-1">
            <Image
              src="/svg/ie-logo.svg"
              width={32}
              height={32}
              alt="Internet Explorer"
            />
            <div className="flex flex-col">
              <span className="text-xs">Internet</span>
              <span className="text-xs text-gray-500">Internet Explorer</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <Image src="/png/mail.png" width={32} height={32} alt="E-mail" />
            <div className="flex flex-col">
              <span className="text-xs">E-mail</span>
              <span className="text-xs text-gray-500">Outlook Express</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <Image
              src="/webp/media-player.webp"
              width={32}
              height={32}
              alt="Media Player"
            />
            <div className="flex flex-col">
              <span className="text-xs">Windows Media Player</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <Image
              src="/png/msnlogo.png"
              width={32}
              height={32}
              alt="Windows Messenger"
            />
            <div className="flex flex-col">
              <span className="text-xs">Windows Messenger</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <Image
              src="/png/tour.png"
              width={32}
              height={32}
              alt="Tour Windows XP"
            />
            <div className="flex flex-col">
              <span className="text-xs">Tour Windows XP</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <Image
              src="/png/monitor.png"
              width={32}
              height={32}
              alt="File and Settings Transfer Wizard"
            />
            <div className="flex flex-col">
              <span className="text-xs">File and Settings Transfer Wizard</span>
            </div>
          </div>
          <div className="flex items-center gap-2 justify-center mt-auto">
            <span className="text-xs font-semibold">All Programs</span>
            <Image
              src="/png/play.png"
              width={32}
              height={32}
              alt="All programs"
            />
          </div>
        </div>
      </div>
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
