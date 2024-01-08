import { UserButton, currentUser } from "@clerk/nextjs";
import { Badge } from "@/components/ui/badge";
import { getBestRole } from "@/lib/role";

export async function Profile() {
  let user;
  try {
    user = await currentUser();
  } catch (error) {
    user = undefined;
  }

  if (!user) {
    return <div className="absolute top-5 right-5 flex flex-row space-x-3">
      <a href="/sign-in">Login</a>
    </div>;
  }
  const role = await getBestRole(user.id);
  return (
    <div className="absolute top-5 right-5 flex flex-row space-x-3">
      <div className="flex flex-col">
        <span>{user?.username || (user?.firstName+ " "+ user?.lastName)}</span>
        <Badge className="justify-center">{role.title}</Badge>
      </div>
      <div className="py-2">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
