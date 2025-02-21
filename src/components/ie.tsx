import { FormEvent, useRef, useState } from "react";
import Image from "next/image";

import Window from "@/components/window/window";

export default function IE({ windowId }: { windowId: string }) {
  const [iframeSrc, setIframeSrc] = useState("https://");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      setIframeSrc(inputRef.current.value);
    }
  };

  return (
    <Window windowId={windowId} windowTitle="Internet Explorer">
      <div className="flex flex-col h-full bg-[#f0eede] ml-1">
        <div className="flex items-center border-b border-gray-300">
          <div className="flex flex-1 gap-3 p-1">
            <span className="text-xs">File</span>
            <span className="text-xs">Edit</span>
            <span className="text-xs">Edit</span>
            <span className="text-xs">View</span>
            <span className="text-xs">Favorites</span>
            <span className="text-xs">Tools</span>
            <span className="text-xs">Help</span>
          </div>
          <div className="flex justify-center w-8 border-l border-gray-300 bg-white">
            <Image src="/png/xp-logo.png" width={20} height={20} alt="icon" />
          </div>
        </div>
        <div className="flex items-center">
          <Image src="/png/go-back.png" width={32} height={32} alt="icon" />
          <span className="text-xs text-gray-400">Back</span>
          <Image src="/png/go-foward.png" width={32} height={32} alt="icon" />
          <div className="flex gap-1 ml-2 border-r border-gray-300">
            <Image src="/png/close.png" width={24} height={24} alt="icon" />
            <Image src="/png/refresh.png" width={24} height={24} alt="icon" />
            <Image src="/png/home.png" width={24} height={24} alt="icon" />
          </div>
          <div className="flex items-center gap-2 px-1 border-r border-gray-300">
            <Image src="/png/search.png" width={24} height={24} alt="icon" />
            <span className="text-xs">Search</span>
            <Image
              src="/png/yellow-star.png"
              width={24}
              height={24}
              alt="icon"
            />
            <span className="text-xs">Favorites</span>
            <Image
              src="/png/clock-refresh.png"
              width={24}
              height={24}
              alt="icon"
            />
          </div>
          <div className="flex items-center gap-1 mx-2">
            <Image
              src="/png/envelope.png"
              width={24}
              height={24}
              className="h-fit"
              alt="icon"
            />
            <Image
              src="/png/printer.png"
              width={24}
              height={24}
              className="h-fit"
              alt="icon"
            />
            <Image
              src="/png/sign-paper.png"
              width={24}
              height={24}
              className="h-fit"
              alt="icon"
            />
            <Image
              src="/png/cursor-blue.png"
              width={24}
              height={24}
              className="h-fit"
              alt="icon"
            />
            <Image
              src="/png/msnlogo.png"
              width={24}
              height={24}
              className="h-fit"
              alt="icon"
            />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-1 px-1 border-t border-gray-300"
        >
          <span className="text-xs text-gray-500">Address</span>

          <input
            ref={inputRef}
            placeholder="Enter the website address (e.g. https://website.com)"
            className="flex-1 w-full p-[2px] text-xs outline-none border border-gray-400"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-1 w-12 border-r border-gray-300"
          >
            <Image
              src="/png/green-arrow-right.png"
              width={20}
              height={20}
              alt="icon"
            />
            <span className="text-xs">Go</span>
          </button>

          <div className="inline-flex items-center gap-1">
            <span className="text-xs text-gray-500">Links</span>
            <Image
              src="/png/double-arrouw-right-black.png"
              width={8}
              height={8}
              alt="icon"
            />
          </div>
        </form>
        <iframe
          src={iframeSrc || "https://"}
          className="w-full h-full border border-gray-300 shadow-inner bg-white"
          allowFullScreen
        />
      </div>
    </Window>
  );
}
