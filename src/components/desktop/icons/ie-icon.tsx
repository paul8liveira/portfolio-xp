"use client";

import { useDesktop } from "@/contexts/desktop-context";
import Icon from "@/components/icon/desktop-icon";
import InternetExplorer from "@/components/ie";

export default function RecycleBinDesktopIcon() {
  const { createWindowId, openWindow } = useDesktop();

  const handleDoubleClick = () => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => <InternetExplorer windowId={windowId} />,
      "Internet Explorer",
      "/png/iexplorer.png"
    );
  };

  return (
    <Icon
      id="ie"
      x={10}
      y={10}
      iconSrc="/png/iexplorer.png"
      title="Internet Explorer"
      onDoubleClick={handleDoubleClick}
    />
  );
}
