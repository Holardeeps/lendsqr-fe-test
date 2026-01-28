import UsersClient from "@/components/user-client/UsersClient";

const getUsers = async () => {
  // Pulling the users data from nex route app/api/users
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
    cache: "no-store",
  });

  // Throw error on 400 or 500
  if (!res.ok) throw new Error("Failed to fetch users");

  // console.log(res);

  return res.json();
};

export default async function Page() {
  const rawUsers: User[] = await getUsers();

  return <UsersClient data={rawUsers} />;
}
