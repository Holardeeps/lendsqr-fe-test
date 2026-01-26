import styles from "./page.module.scss";

type userIdProps = {
  params: {
    userId: string;
  };
};

const page = async ({ params }: userIdProps) => {
  const { userId } = await params;

  return (
    <div>
      <h2>xnknxl</h2>
      {userId}
    </div>
  );
};

export default page;
