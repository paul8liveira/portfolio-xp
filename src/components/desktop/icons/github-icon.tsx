"use client";

import { use } from "react";

import { useDesktop } from "@/contexts/desktop-context";
import Icon from "@/components/icon/desktop-icon";
import Github from "@/components/github";
import { GithubType } from "../desktop-content";

export default function LinkedinDesktopIcon({
  repos,
}: {
  repos: Promise<Array<GithubType>>;
}) {
  const { createWindowId, openWindow } = useDesktop();
  const response = use(repos);
  
  const handleDoubleClick = () => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => <Github windowId={windowId} repos={response} />,
      "Github Repos",
      "/png/folder.png"
    );
  };

  return (
    <Icon
      id="linkedin"
      x={120}
      y={190}
      iconSrc="/png/folder.png"
      title="Github Repos"
      onDoubleClick={handleDoubleClick}
    />
  );
}
