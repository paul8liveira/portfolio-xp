export const dynamic = "force-static";

export type GithubType = { id: number; name: string; html_url: string; language: string, topics: string[] };

export async function GET() {
  const username = process.env.GITHUB_USERNAME;
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data: GithubType[] = await response.json();
  return Response.json({ data });
}
