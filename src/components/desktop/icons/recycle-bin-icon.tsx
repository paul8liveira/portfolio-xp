"use client";

import { useDesktop } from "@/contexts/desktop-context";
import Icon from "@/components/icon/desktop-icon";
import Window from "@/components/window/window";

export default function RecycleBinDesktopIcon() {
  const { createWindowId, openWindow } = useDesktop();

  const handleDoubleClick = () => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => (
        <Window windowId={windowId} windowTitle="Recycle Bin">
          <div className="flex flex-wrap gap-4 p-2">
            <Icon
              id="ico1"
              iconSrc="/gif/word.gif"
              title="resume-updated-final-REALFINAL.doc"
              textColor="black"
              draggable={false}
            />  
            <Icon
              id="ico2"
              iconSrc="/webp/notepad.webp"
              title="wifi-password-do-not-touch.txt"
              textColor="black"
              draggable={false}
            />  
            <Icon
              id="ico3"
              iconSrc="/gif/word.gif"
              title="thesis_Ready_Version22_final.doc"
              textColor="black"
              draggable={false}
            />    
            <Icon
              id="ico4"
              iconSrc="/gif/word.gif"
              title="brilliant-ideas-never-done.doc"
              textColor="black"
              draggable={false}
            />
            <Icon
              id="ico5"
              iconSrc="/png/iexplorer.png"
              title="my-first-website-geocities.html"
              textColor="black"
              draggable={false}
            />  
            <Icon
              id="ico6"
              iconSrc="/webp/media-player.webp"
              title="orkut-mp3.mp3"
              textColor="black"
              draggable={false}
            />   
            <Icon
              id="ico7"
              iconSrc="/gif/power-point.gif"
              title="high-school-math-class.ppt"
              textColor="black"
              draggable={false}
            />
            <Icon
              id="ico8"
              iconSrc="/ico/file.ico"
              title="lost-episodes-summary.odt"
              textColor="black"
              draggable={false}
            />   
            <Icon
              id="ico9"
              iconSrc="/png/exe.png"
              title="here-lies-a-virus.exe"
              textColor="black"
              draggable={false}
            />      
            <Icon
              id="ico10"
              iconSrc="/ico/file.ico"
              title="love-of-my-life-msn.bak"
              textColor="black"
              draggable={false}
            />
            <Icon
              id="ico11"
              iconSrc="/gif/excel.gif"
              title="dog-names-I-never-use.xlsx"
              textColor="black"
              draggable={false}
            />       
            <Icon
              id="ico12"
              iconSrc="/gif/power-point.gif"
              title="how-to-become-a-millionaire.ppt"
              textColor="black"
              draggable={false}
            /> 
            <Icon
              id="ico13"
              iconSrc="/gif/word.gif"
              title="why-am-I-like-this.doc"
              textColor="black"
              draggable={false}
            />
            <Icon
              id="ico18"
              iconSrc="/webp/media-player.webp"
              title="Rick Astley - Never Gonna Give You Up (VIRUS).mp3"
              textColor="black"
              draggable={false}
            />  
            <Icon
              id="ico18"
              iconSrc="/png/exe.png"
              title="CS 1.6.exe"
              textColor="black"
              draggable={false}
            />              
            <Icon
              id="ico18"
              iconSrc="/webp/winrar.webp"
              title="my childhook pics.zip"
              textColor="black"
              draggable={false}
            />                        
            <Icon
              id="ico19"
              iconSrc="/webp/media-player.webp"
              title="Linkin Park - Crawling (Windows Error Remix).mp3"
              textColor="black"
              draggable={false}
            />            
            <Icon
              id="ico14"
              iconSrc="/webp/notepad.webp"
              title="new-year-resolutions-2010.txt"
              textColor="black"
              draggable={false}
            />   
            <Icon
              id="ico14"
              iconSrc="/png/exe.png"
              title="sueD.exe"
              textColor="black"
              draggable={false}
            /> 
            <Icon
              id="ico14"
              iconSrc="/png/exe.png"
              title="Kazaa_Lite.exe"
              textColor="black"
              draggable={false}
            />                              
            <Icon
              id="ico15"
              iconSrc="/svg/pdf.svg"
              title="reasons-to-quit-my-job.pdf"
              textColor="black"
              draggable={false}
            />  
            <Icon
              id="ico15"
              iconSrc="/png/exe.png"
              title="The SIMS 2.exe"
              textColor="black"
              draggable={false}
            />              
            <Icon
              id="ico16"
              iconSrc="/webp/media-player.webp"
              title="Avril Lavigne - Complicated (2003 MSN Remix).mp3"
              textColor="black"
              draggable={false}
            />
            <Icon
              id="ico21"
              iconSrc="/png/exe.png"
              title="SimCity2000_CrackedVersion.exe"
              textColor="black"
              draggable={false}
            />            
            <Icon
              id="ico17"
              iconSrc="/webp/media-player.webp"
              title="Korn - Freak on a Leash (Windows Error Remix).mp3"
              textColor="black"
              draggable={false}
            />
            <Icon
              id="ico20"
              iconSrc="/png/exe.png"
              title="MSN Messenger 7.5.exe"
              textColor="black"
              draggable={false}
            />
            <Icon
              id="ico2"
              iconSrc="/png/exe.png"
              title="Internet_Installer_v1.2.exe"
              textColor="black"
              draggable={false}
            />                                                                                                            
          </div>
        </Window>
      ),
      "Recycle Bin",
      "/webp/recycle-bin-full.webp"
    );
  };

  return (
    <Icon
      id="bin"
      x={10}
      y={100}
      iconSrc="/webp/recycle-bin-full.webp"
      title="Recycle Bin"
      onDoubleClick={handleDoubleClick}
    />
  );
}
