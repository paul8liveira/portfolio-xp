"use client";

import { use } from "react";

import { useDesktop } from "@/contexts/desktop-context";
import Icon from "@/components/icon/desktop-icon";
import Github from "@/components/github";
import { GithubType } from "@/app/api/route";

type Props = { promise: Promise<GithubType[]> };

export default function LinkedinDesktopIcon({ promise }: Props) {
  const { createWindowId, openWindow } = useDesktop();
  const repos = use(promise);

  const handleDoubleClick = () => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => <Github windowId={windowId} repos={repos} />,
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
