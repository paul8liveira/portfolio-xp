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
        <Window windowId={windowId} windowTitle="Internet Explorer">
          Internet Explorer
        </Window>
      ),
      "Internet Explorer",
      "/svg/ie-logo.svg"
    );
  };

  return (
    <Icon
      id="ie"
      x={10}
      y={10}
      iconSrc="/svg/ie-logo.svg"
      title="Internet Explorer"
      onDoubleClick={handleDoubleClick}
    />
  );
}
