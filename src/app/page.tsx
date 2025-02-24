import DeskTopContent from "@/components/desktop/desktop-content";

export default function Desktop() {
  const repos = fetch("https://api.github.com/users/paul8liveira/repos").then(
    (response) => response.json()
  );
  return <DeskTopContent repos={repos} />;
}
