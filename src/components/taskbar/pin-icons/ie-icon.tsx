"use client";

import { useDesktop } from "@/contexts/desktop-context";
import Icon from "@/components/icon/pin-icon";
import InternetExplorer from "@/components/ie";

export default function IEPinIcon() {
  const { createWindowId, openWindow } = useDesktop();

  const handleClick = () => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => <InternetExplorer windowId={windowId} />,
      "Internet Explorer",
      "/png/iexplorer.png"
    );
  };

  return <Icon iconSrc="/png/iexplorer.png" onClick={handleClick} />;
}
