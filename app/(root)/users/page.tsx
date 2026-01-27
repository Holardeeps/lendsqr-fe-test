import UsersClient from "@/components/user-client/UsersClient";
import {
  cleanPhoneNumber,
  formatDateString,
  getLongestWord,
  getRandomStatus,
  truncateEmailLocalPart,
} from "@/lib/utils";

const getUsers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch users");

  // console.log(res);

  return res.json();
};

export default async function Page() {
  const rawUsers: User[] = await getUsers();

  // function transformUsers(raw: User[]) {
  //   return raw.map((user) => ({
  //     ...user, // keep ingall fields by default

  //     // Apply your transformations:
  //     status: getRandomStatus(), // randomize status
  //     phone: cleanPhoneNumber(user.phone), // clean phone number
  //     company: getLongestWord(user.company), // maybe take longest word of the name
  //     email: truncateEmailLocalPart(user.email), // limit email local part to 8 chars
  //     date_joined: formatDateString(user.date_joined), // format date nicely
  //   }));
  // // }

  // const data = transformUsers(rawUsers);

  return <UsersClient data={rawUsers} />;
}
