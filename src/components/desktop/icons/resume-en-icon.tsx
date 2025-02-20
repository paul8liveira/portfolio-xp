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
        <Window windowId={windowId} windowTitle="My Resume in English.pdf">
          <iframe
            src="/pdf/paulo-r-oliveira-en.pdf"
            width="100%"
            height="100%"
            allowFullScreen
          />
        </Window>
      ),
      "My Resume in English.pdf",
      "/svg/pdf.svg"
    );
  };

  return (
    <Icon
      id="readme"
      x={120}
      y={10}
      iconSrc="/svg/pdf.svg"
      title="My Resume in English.pdf"
      onDoubleClick={handleDoubleClick}
    />
  );
}
