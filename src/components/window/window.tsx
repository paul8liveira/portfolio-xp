"use client";

import { useEffect } from "react";

import { useDesktop } from "@/contexts/desktop-context";
import WindowHeader from "@/components/window/window-header";

type WindowProps = {
  windowId: string;
  children: React.ReactNode;
  windowTitle?: string;
};

const Window = ({ windowId, children, windowTitle }: WindowProps) => {
  const { getWindowZIndex } = useDesktop();

  // drap calculation
  useEffect(() => {
    const window = document.getElementById(windowId);
    let headerPosX = 0,
      headerPosY = 0,
      windowPosX = 0,
      windowPosY = 0;

    if (window) {
      const dragMouseDown = (ev: MouseEvent) => {
        // get the mouse cursor position at startup:
        headerPosX = ev.clientX;
        headerPosY = ev.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
      };
      const closeDragElement = () => {
        document.onmouseup = null;
        document.onmousemove = null;
      };
      const elementDrag = (ev: MouseEvent) => {
        windowPosX = headerPosX - ev.clientX;
        windowPosY = headerPosY - ev.clientY;
        headerPosX = ev.clientX;
        headerPosY = ev.clientY;

        window.style.top = window.offsetTop - windowPosY + "px";
        window.style.left = window.offsetLeft - windowPosX + "px";
      };

      window.onmousedown = function () {
        window.style.zIndex = getWindowZIndex();
      };

      const header = window.querySelector("header");
      if (header) {
        header.onmousedown = dragMouseDown;
      }
    }
  });

  // resize calculation
  useEffect(() => {
    const windowPaddingSize = 4;
    const windowHeaderSize = 36;
    const window = document.getElementById(windowId);
    let startX = 0,
      startY = 0,
      startWidth = 0,
      startHeight = 0;

    if (window) {
      const section = window.querySelector("section");

      const initResize = (ev: MouseEvent) => {
        startX = ev.clientX;
        startY = ev.clientY;

        if (document.defaultView) {
          startWidth = parseInt(
            document.defaultView.getComputedStyle(window).width,
            10
          );
          startHeight = parseInt(
            document.defaultView.getComputedStyle(window).height,
            10
          );

          document.documentElement.addEventListener(
            "mousemove",
            doResize,
            false
          );
          document.documentElement.addEventListener(
            "mouseup",
            stopResize,
            false
          );
        }
      };
      const doResize = (ev: MouseEvent) => {
        window.style.width = startWidth + ev.clientX - startX + "px";
        window.style.height = startHeight + ev.clientY - startY + "px";

        // section area responsible for the window content
        if (section) {
          section.style.width =
            startWidth + ev.clientX - startX - windowPaddingSize + "px";
          section.style.height =
            startHeight + ev.clientY - startY - windowHeaderSize + "px";
        }
      };
      const stopResize = () => {
        document.documentElement.removeEventListener(
          "mousemove",
          doResize,
          false
        );
        document.documentElement.removeEventListener(
          "mouseup",
          stopResize,
          false
        );
      };

      const right = document.createElement("div");
      right.className = "resizer-right";
      window.appendChild(right);
      right.addEventListener("mousedown", initResize, false);

      const bottom = document.createElement("div");
      bottom.className = "resizer-bottom";
      window.appendChild(bottom);
      bottom.addEventListener("mousedown", initResize, false);

      const both = document.createElement("div");
      both.className = "resizer-both";
      window.appendChild(both);
      both.addEventListener("mousedown", initResize, false);
    }
  });

  return (
    <dialog id={windowId} open>
      <WindowHeader windowId={windowId} windowTitle={windowTitle} />
      <section className="overflow-auto">{children}</section>
    </dialog>
  );
};

export default Window;
