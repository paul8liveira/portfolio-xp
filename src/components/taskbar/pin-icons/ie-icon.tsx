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
      "/svg/ie-logo.svg"
    );
  };

  return <Icon iconSrc="/svg/ie-logo.svg" onClick={handleClick} />;
}
