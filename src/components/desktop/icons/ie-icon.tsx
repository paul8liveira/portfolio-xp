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
