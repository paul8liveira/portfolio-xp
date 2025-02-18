"use client";

import { useDesktop } from "@/contexts/desktop-context";

export default function WindowManager() {
  const { windows } = useDesktop();
  return windows.map(({ id, component: Component }) => (
    <Component key={`dialog-${id}`} />
  ));
}
