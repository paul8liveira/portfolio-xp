"use client";

import React, { createContext, useContext, useState } from "react";

type Window = {
  id: string;
  component: React.ElementType;
  title?: string;
  icon?: string;
};
type DesktopContext = {
  windows: Window[];
  openWindow: (
    id: string,
    component: React.ElementType,
    title?: string,
    icon?: string
  ) => void;
  closeWindow: (id: string) => void;
  createWindowId: () => string;
  getWindowZIndex: () => string;
  maximizeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
};

const DesktopContext = createContext<DesktopContext | undefined>(undefined);

export const DesktopProvider = ({ children }: React.PropsWithChildren) => {
  const [windows, setWindows] = useState<Window[]>([]);
  const [currentWindowIndex, setCurrentWindowIndex] = useState(0);

  const createWindowId = () => {
    const lastWindow = windows[windows.length - 1];
    const windowId = lastWindow ? Number(lastWindow.id) + 1 : 0;
    return windowId.toString();
  };
  const openWindow = (
    id: string,
    component: React.ElementType,
    title?: string,
    icon?: string
  ) => {
    setWindows((prev) => [...prev, { id, component, title, icon }]);
  };
  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((window) => window.id !== id));
  };
  const getWindowZIndex = () => {
    const index = currentWindowIndex + 1;
    setCurrentWindowIndex(index);
    return index.toString();
  };
  const maximizeWindow = (id: string) => {
    const window = document.getElementById(id);
    if (window) {
      // 32px from taskbar size
      window.style.width = "100%";
      window.style.height = "calc(100vh - 32px)";
      window.style.top = "0";
      window.style.left = "0";

      // content
      const header = window.querySelector("section");
      if (header) {
        // 2px from window border size
        header.style.width = "calc(100vw - 2px)";
        // 68px from taskbar, window header and window border sizes
        header.style.height = "calc(100vh - 68px)";
      }
    }
  };
  const minimizeWindow = (id: string) => {
    const window = document.getElementById(id) as HTMLDialogElement;
    if (window) {
      if (window.open) {
        window.close();
        return;
      }
      window.show();
    }
  };

  return (
    <DesktopContext
      value={{
        windows,
        openWindow,
        closeWindow,
        createWindowId,
        getWindowZIndex,
        maximizeWindow,
        minimizeWindow,
      }}
    >
      {children}
    </DesktopContext>
  );
};

export const useDesktop = () => {
  const context = useContext(DesktopContext);
  if (!context) {
    throw new Error("useDesktop must be used within a DesktopProvider");
  }
  return context;
};
