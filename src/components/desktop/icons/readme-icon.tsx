"use client";

import { useDesktop } from "@/contexts/desktop-context";
import Icon from "@/components/icon/desktop-icon";
import Window from "@/components/window/window";
import { thisProjectText } from "@/utils/constants";

export default function ReadmeDesktopIcon() {
  const { createWindowId, openWindow } = useDesktop();

  const handleDoubleClick = () => {
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

  return (
    <Icon
      id="readme"
      x={10}
      y={190}
      iconSrc="/webp/notepad.webp"
      title="This project.txt"
      onDoubleClick={handleDoubleClick}
    />
  );
}
