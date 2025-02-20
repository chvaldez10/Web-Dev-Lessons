import { getUserData } from "@/actions/get-user-data";
import { redirect } from "next/navigation";

export default async function Home() {
  const userData = await getUserData();
  console.log(userData);

  if (!userData) {
    return redirect("/auth");
  }

  const workspaceId = userData.workspaces?.[0];

  if (!workspaceId) {
    return redirect("/create-workspace");
  }

  return <div>Hello {userData.name}</div>;
}
