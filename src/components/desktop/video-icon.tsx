"use client";

import { useDesktop } from "@/contexts/desktop-context";
import Icon from "@/components/icon/desktop-icon";
import Window from "@/components/window/window";

export default function VideoDesktopIcon() {
  const { createWindowId, openWindow } = useDesktop();

  const handleDoubleClick = () => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => (
        <Window windowId={windowId} windowTitle="About Me.mp4">
          <div className="p-2">video</div>
        </Window>
      ),
      "About Me.mp4",
      "/ico/video.ico"
    );
  };

  return (
    <Icon
      id="aboutme"
      x={10}
      y={280}
      iconSrc="/ico/video.ico"
      title="About Me.mp4"
      onDoubleClick={handleDoubleClick}
    />
  );
}
