import Window from "@/components/window/window";

export default function MediaPlayer({ windowId }: { windowId: string }) {
  return (
    <Window windowId={windowId} windowTitle="Windows Media Player">
      <div className="flex flex-col h-full bg-[#f0eede] ml-1">
        <div className="flex gap-3 p-1 items-center border-b border-gray-300">
          <span className="text-xs">File</span>
          <span className="text-xs">View</span>
          <span className="text-xs">Play</span>
          <span className="text-xs">Navigate</span>
          <span className="text-xs">Favorites</span>
          <span className="text-xs">Help</span>
        </div>
        <div className="flex flex-row h-full">
          <div className="flex-1 bg-black">
            <iframe
              name="videoframe"
              className="w-full h-full"
              src="https://www.youtube.com/embed/1oDrJba2PSs?si=E3rtjlVz0JYFuYWx"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex-none p-2 bg-black">
            <div className="flex flex-col space-y-2">
              <a
                href="https://www.youtube.com/embed/1oDrJba2PSs?si=E3rtjlVz0JYFuYWx"
                target="videoframe"
                className="text-xs text-green-400"
              >
                About Me (pt-BR).mp4
              </a>
              <a
                href="https://www.youtube.com/embed/1oDrJba2PSs?si=E3rtjlVz0JYFuYWx"
                target="videoframe"
                className="text-xs text-green-400"
              >
                About Me (en-US).mp4
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 p-1 items-center border-b border-gray-300">
          <input
            type="range"
            value={0}
            min={0}
            max={100}
            className="w-full"
            disabled
          />
        </div>
      </div>
    </Window>
  );
}
