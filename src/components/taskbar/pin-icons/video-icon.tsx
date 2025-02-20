"use client";

import { useDesktop } from "@/contexts/desktop-context";
import Icon from "@/components/icon/pin-icon";
import Window from "@/components/window/window";

export default function VideoPinIcon() {
  const { createWindowId, openWindow } = useDesktop();

  const handleClick = () => {
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

  return <Icon iconSrc="/ico/video.ico" onClick={handleClick} />;
}
