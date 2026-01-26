import Link from "next/link";
import styles from "./InfoBox.module.scss";

type infoProps = {
  userName: string;
};

const InfoBox = ({ userName }: infoProps) => {
  return (
    <div className={styles.box}>
      <div className="">
        <img src="/icons/eye.png" alt="eye" />
        <Link href={`/users/${userName}`}>
          <h2>View details</h2>
        </Link>
      </div>
      <div className="">
        <img src="/icons/blacklist.png" alt="blacklist" />
        <h2>blacklist user</h2>
      </div>
      <div className="">
        <img src="/icons/verify.png" alt="" />
        <h2>Activate user</h2>
      </div>
    </div>
  );
};

export default InfoBox;
