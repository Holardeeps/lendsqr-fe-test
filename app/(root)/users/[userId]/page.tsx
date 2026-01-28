import UserDetails from "@/components/user-details/UserDetails";

type userIdProps = {
  params: {
    userId: string;
  };
};

// Getting the userId from the params props from next { params: { id: string } }
const page = async ({ params }: userIdProps) => {
  const { userId } = await params;

  return <UserDetails id={userId} />;
};

export default page;
