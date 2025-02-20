"use client";

import { useDesktop } from "@/contexts/desktop-context";
import Icon from "@/components/icon/pin-icon";
import Window from "@/components/window/window";

export default function IEPinIcon() {
  const { createWindowId, openWindow } = useDesktop();

  const handleClick = () => {
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

  return <Icon iconSrc="/svg/ie-logo.svg" onClick={handleClick} />;
}
