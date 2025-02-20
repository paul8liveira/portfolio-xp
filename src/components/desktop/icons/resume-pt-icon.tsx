"use client";

import { useDesktop } from "@/contexts/desktop-context";
import Icon from "@/components/icon/desktop-icon";
import Window from "@/components/window/window";

export default function ResumeDesktopIcon() {
  const { createWindowId, openWindow } = useDesktop();

  const handleDoubleClick = () => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => (
        <Window windowId={windowId} windowTitle="My Resume in Portuguese.pdf">
          <iframe
            src="/pdf/paulo-r-oliveira-pt.pdf"
            width="100%"
            height="100%"
            allowFullScreen
          />
        </Window>
      ),
      "My Resume in Portuguese.pdf",
      "/svg/pdf.svg"
    );
  };

  return (
    <Icon
      id="readme"
      x={10}
      y={370}
      iconSrc="/svg/pdf.svg"
      title="My Resume in Portuguese.pdf"
      onDoubleClick={handleDoubleClick}
    />
  );
}
