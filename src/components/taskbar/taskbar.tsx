"use client";

import Image from "next/image";

import { useDesktop } from "@/contexts/desktop-context";
import Clock from "@/components/taskbar/clock";
import StartButton from "@/components/taskbar/start/start-button";
import {
  IEPinIcon,
  LinkedinPinIcon,
  ReadmePinIcon,
  VideoPinIcon,
} from "@/components/taskbar/pin-icons";

export default function Taskbar() {
  const { windows, minimizeWindow } = useDesktop();

  return (
    <footer>
      <div className="flex flex-none">
        <StartButton />
      </div>
      <div className="flex flex-none items-center gap-2 px-3">
        <IEPinIcon />
        <ReadmePinIcon />
        <VideoPinIcon />
        <LinkedinPinIcon />
      </div>
      <div className="flex grow items-center gap-1 overflow-x-auto">
        {windows.map((window) => (
          <button
            className="window-opened"
            key={`window-open-${window.id}`}
            onClick={() => minimizeWindow(window.id)}
          >
            {window.icon && (
              <Image
                src={window.icon}
                width={12}
                height={12}
                alt={window.title || "icon"}
              />
            )}
            <span className="text-xs text-white">{window.title}</span>
          </button>
        ))}
      </div>
      <div className="flex flex-none items-center gap-3 px-3 bg-taskbar-end border-l border-l-black">
        <div className="flex items-center gap-1">
          <Image src="/png/soundon.png" width={16} height={16} alt="sound on" />
          <Image src="/png/msnlogo.png" width={16} height={16} alt="msn" />
          <Image src="/png/network.png" width={16} height={16} alt="network" />
          <Image
            src="/png/gatewall.png"
            width={16}
            height={16}
            alt="gatewall"
          />
        </div>
        <Clock />
      </div>
    </footer>
  );
}
