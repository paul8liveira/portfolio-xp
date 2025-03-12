import Image from "next/image";

import Window from "@/components/window/window";
import { GithubType } from "@/app/api/route";

type Props = {
  windowId: string;
  repos: GithubType[];
};

export default function Github({ windowId, repos }: Props) {
  const repoLanguage = (repo: GithubType) => {
    return repo.topics && repo.topics.length > 0
      ? repo.topics.join(", ")
      : repo.language;
  };

  return (
    <Window windowId={windowId} windowTitle="Github Repos">
      <div className="flex flex-col gap-4 p-2">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="flex text-[12px] cursor-pointer hover:bg-[#d2e5fa]"
            onDoubleClick={() => window.open(repo.html_url, "_blank")}
          >
            <Image src="/png/folder.png" width={40} height={40} alt="icon" />
            <div className="flex flex-col justify-center">
              <span>{repo.name}</span>
              <span className="text-gray-500">{repoLanguage(repo)}</span>
            </div>
          </div>
        ))}
      </div>
    </Window>
  );
}
