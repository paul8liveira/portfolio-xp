"use client";

import Icon from "@/components/icon/desktop-icon";

export default function LinkedinDesktopIcon() {
  const handleDoubleClick = () => {
    window.open("https://www.linkedin.com/in/paul8liveira/", "_blank");
  };

  return (
    <Icon
      id="linkedin"
      x={120}
      y={100}
      iconSrc="/png/linkedin.png"
      title="Linkedin Profile"
      onDoubleClick={handleDoubleClick}
    />
  );
}
