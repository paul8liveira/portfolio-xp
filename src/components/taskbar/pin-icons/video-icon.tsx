"use client";

import { useDesktop } from "@/contexts/desktop-context";
import Icon from "@/components/icon/pin-icon";
import MediaPlayer from "@/components/media-player";

export default function VideoPinIcon() {
  const { createWindowId, openWindow } = useDesktop();

  const handleClick = () => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => <MediaPlayer windowId={windowId} />,
      "Windows Media Player",
      "/webp/media-player.webp"
    );
  };

  return <Icon iconSrc="/webp/media-player.webp" onClick={handleClick} />;
}
