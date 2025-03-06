"use client";

import { useDesktop } from "@/contexts/desktop-context";
import Icon from "@/components/icon/desktop-icon";
import MediaPlayer from "@/components/media-player";

export default function VideoDesktopIcon() {
  const { createWindowId, openWindow } = useDesktop();

  const handleDoubleClick = () => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => <MediaPlayer windowId={windowId} />,
      "Windows Media Player",
      "/webp/media-player.webp"
    );
  };

  return (
    <Icon
      id="aboutme"
      x={10}
      y={280}
      iconSrc="/webp/media-player.webp"
      title="Windows Media Player"
      onDoubleClick={handleDoubleClick}
    />
  );
}
