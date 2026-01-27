"use client";

import Link from "next/link";
import styles from "./InfoBox.module.scss";
import { useUserStore } from "@/store/userStore";

type infoProps = {
  id: string;
  onClose: () => void;
};

const InfoBox = ({ id, onClose }: infoProps) => {
  // getting the user from store
  const getUser = useUserStore((state) => state.getUserById);
  const updateUser = useUserStore((state) => state.updateUser); //updating status function
  const user = getUser(id);

  if (!user) return null;

  // Updating the user status
  const handleBlacklist = () => {
    updateUser(user, { status: "blacklisted" });
    onClose(); // close popup after action
  };
  const handleActivate = () => {
    updateUser(user, { status: "active" });
    onClose(); // close popup after action
  };

  return (
    <div className={styles.box}>
      <div className="">
        <img src="/icons/eye.png" alt="eye" />
        <Link href={`/users/${id}`}>
          <h2>View details</h2>
        </Link>
      </div>
      <div onClick={handleBlacklist}>
        <img src="/icons/blacklist.png" alt="blacklist" />
        <h2>blacklist user</h2>
      </div>
      <div onClick={handleActivate}>
        <img src="/icons/verify.png" alt="" />
        <h2>Activate user</h2>
      </div>
    </div>
  );
};

export default InfoBox;
