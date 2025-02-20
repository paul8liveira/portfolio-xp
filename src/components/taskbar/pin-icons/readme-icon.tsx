"use client";

import { useDesktop } from "@/contexts/desktop-context";
import Icon from "@/components/icon/pin-icon";
import Window from "@/components/window/window";
import { thisProjectText } from "@/utils/constants";

export default function ReadmePinIcon() {
  const { createWindowId, openWindow } = useDesktop();

  const handleClick = () => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => (
        <Window windowId={windowId} windowTitle="This project.txt">
          <div className="p-2" dangerouslySetInnerHTML={{ __html: thisProjectText }} />
        </Window>
      ),
      "This project.txt",
      "/webp/notepad.webp"
    );
  };

  return <Icon iconSrc="/webp/notepad.webp" onClick={handleClick} />;
}
