"use client";

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
import { Suspense } from "react";

export type GithubType = { id: number; name: string; html_url: string; language: string, topics: string[] };

export default function DeskTopContent({
  repos,
}: {
  repos: Promise<Array<GithubType>>;
}) {
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
        <GithubDesktopIcon repos={repos} />
      </Suspense>
      <WindowManager />
    </div>
  );
}
