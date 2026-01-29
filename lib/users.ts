export async function getUsers() {
  const res = await fetch(`${process.env.LENDSQR_USERS_ENDPOINT}`, {
    headers: {
      "content-type": "application/json",
    },
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}
