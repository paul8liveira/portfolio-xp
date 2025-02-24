import { Content } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";

const StartMenuHeader = ({ name }: { name: string }) => {
  return (
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
        {name}
      </span>
    </header>
  );
};

const StartMenuItem = ({
  title,
  iconPath,
  description,
}: {
  title: string;
  iconPath: string;
  description?: string;
}) => {
  return (
    <div className="flex flex-row items-center gap-1 hover:text-white hover:bg-[#316ac5] cursor-pointer">
      <Image src={iconPath} width={32} height={32} alt={title} />
      <div className="flex flex-col">
        <span className="text-xs">{title}</span>
        {description && (
          <span className="text-xs text-gray-500">{description}</span>
        )}
      </div>
    </div>
  );
};

const StartMenuFooter = () => {
  return (
    <div className="flex items-center justify-end gap-2 pr-3 col-span-2 bg-start-menu-footer">
      <button className="flex items-center gap-1">
        <Image src="/png/logoff.png" width={24} height={24} alt="Logoff icon" />
        <span className="text-white text-xs font-thin">Log Off</span>
      </button>
      <button className="flex items-center gap-1">
        <Image
          src="/png/turnoff.png"
          width={24}
          height={24}
          alt="Turn off icon"
        />

        <span className="text-white text-xs font-thin">Turn Off Computer</span>
      </button>
    </div>
  );
};

export default function StartButtonContent() {
  return (
    <Content className="start-menu drop-shadow-lg" side="top" sideOffset={1}>
      <StartMenuHeader name="Paulo Oliveira" />
      {/* left menu */}
      <div className="row-span-7 row-start-3 p-2 space-y-2 bg-white">
        <div className="flex flex-col h-full gap-y-2">
          <StartMenuItem
            title="Internet"
            iconPath="/png/iexplorer.png"
            description="Internet Explorer"
          />
          <StartMenuItem
            title="E-mail"
            iconPath="/png/emailoutlook.png"
            description="Outlook Express"
          />
          <StartMenuItem
            title="Media Player"
            iconPath="/webp/media-player.webp"
          />
          <StartMenuItem
            title="Windows Messenger"
            iconPath="/png/msnlogo.png"
          />
          <StartMenuItem title="Tour Windows XP" iconPath="/png/tourwsxp.png" />
          <StartMenuItem title="MSN Explorer" iconPath="/png/msnexplorer.png" />
          <StartMenuItem
            title="Windows Movie Maker"
            iconPath="/png/moviemaker.png"
          />

          <div className="flex items-center gap-2 justify-center mt-auto hover:text-white hover:bg-[#316ac5] cursor-pointer">
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
      {/* right menu */}
      <div className="row-span-7 row-start-3 p-2 space-y-1 bg-[#d2e5fa] border-l border-l-blue-300">
        <StartMenuItem title="My Documents" iconPath="/png/mydocs.png" />
        <StartMenuItem title="My Music" iconPath="/png/mymusic.png" />
        <StartMenuItem title="My Pictures" iconPath="/png/mypics.png" />
        <StartMenuItem title="My Computer" iconPath="/png/computer.png" />
        <div className="w-11/12 h-px bg-gradient-to-r from-transparent via-zinc-400 to-transparent " />
        <StartMenuItem title="Control Panel" iconPath="/png/controll.png" />
        <div className="w-11/12 h-px bg-gradient-to-r from-transparent via-zinc-400 to-transparent " />
        <StartMenuItem title="Help and Support" iconPath="/png/help.png" />
        <StartMenuItem title="Search" iconPath="/png/search.png" />
        <StartMenuItem title="Run" iconPath="/png/run.png" />
      </div>
      <StartMenuFooter />
    </Content>
  );
}
