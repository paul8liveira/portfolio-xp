import { useDesktop } from "@/contexts/desktop-context";
import Image from "next/image";
import { useMemo } from "react";

type WindowHeaderProps = {
  windowId: string;
  windowTitle?: string;
};

export default function WindowHeader({
  windowId,
  windowTitle,
}: WindowHeaderProps) {
  const { closeWindow, maximizeWindow, minimizeWindow, windows } = useDesktop();

  const window = useMemo(
    () => windows.find((w) => w.id === windowId),
    [windowId, windows]
  );

  return (
    <header>
      <div className="flex items-center gap-1">
        {window && window.icon && (
          <Image
            src={window.icon}
            width={16}
            height={16}
            alt={window.title || "icon"}
          />
        )}
        <span>{windowTitle}</span>
      </div>
      <div className="flex gap-1">
        <button>
          <Image
            src="/svg/minimize.svg"
            width={22}
            height={22}
            alt="Minimize icon"
            onClick={() => minimizeWindow(windowId)}
          />
        </button>
        <button>
          <Image
            src="/svg/fullsize.svg"
            width={22}
            height={22}
            alt="Maximize icon"
            onClick={() => maximizeWindow(windowId)}
          />
        </button>
        <button onClick={() => closeWindow(windowId)}>
          <Image src="/svg/close.svg" width={22} height={22} alt="Close icon" />
        </button>
      </div>
    </header>
  );
}
