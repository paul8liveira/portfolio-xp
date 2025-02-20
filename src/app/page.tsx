"use client";

import {
  RecycleBinDesktopIcon,
  ReadmeDesktopIcon,
  IEDesktopIcon,
  VideoDesktopIcon,
  ResumePTDesktopIcon,
  ResumeENDesktopIcon,
} from "@/components/desktop/icons";
import WindowManager from "@/components/window/window-manager";
import { handleMouseMove, handleMouseUp } from "@/utils/drag";

export default function Desktop() {
  return (
    <div
      className="w-full"
      style={{ height: "100%" }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <IEDesktopIcon />
      <RecycleBinDesktopIcon />
      <ReadmeDesktopIcon />
      <VideoDesktopIcon />
      <ResumePTDesktopIcon />
      <ResumeENDesktopIcon />

      <WindowManager />
    </div>
  );
}
