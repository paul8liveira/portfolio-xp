"use client";

import { useDesktop } from "@/contexts/desktop-context";
import Icon from "@/components/icon/desktop-icon";
import Window from "@/components/window/window";

export default function RecycleBinDesktopIcon() {
  const { createWindowId, openWindow } = useDesktop();

  const handleDoubleClick = () => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => (
        <Window windowId={windowId} windowTitle="Recycle Bin">
          RECYCLE BYN
        </Window>
      ),
      "Recycle Bin",
      "/png/recycle-bin-full.webp"
    );
  };

  return (
    <Icon
      id="bin"
      x={10}
      y={100}
      iconSrc="/png/recycle-bin-full.webp"
      title="Recycle Bin"
      onDoubleClick={handleDoubleClick}
    />
  );
}
