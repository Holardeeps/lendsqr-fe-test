import UsersClient from "@/components/user-client/UsersClient";
import { getUsers } from "@/lib/users";

export default async function Page() {
  const rawUsers: User[] = await getUsers();

  return <UsersClient data={rawUsers} />;
}
