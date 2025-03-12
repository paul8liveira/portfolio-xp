"use client";

import { Suspense } from "react";

import {
  RecycleBinDesktopIcon,
  ReadmeDesktopIcon,
  IEDesktopIcon,
  VideoDesktopIcon,
  ResumePTDesktopIcon,
  ResumeENDesktopIcon,
  LinkedinDesktopIcon,
  GithubDesktopIcon,
} from "@/components/desktop/icons";
import WindowManager from "@/components/window/window-manager";
import { handleMouseMove, handleMouseUp } from "@/utils/drag";

export default function DeskTopContent() {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  const repos = fetch(`${apiURL}/api`).then((response) => response.json());

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
      <LinkedinDesktopIcon />
      <Suspense>
        <GithubDesktopIcon promise={repos} />
      </Suspense>
      <WindowManager />
    </div>
  );
}
