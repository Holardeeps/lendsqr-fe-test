import { capitalizeWord } from "@/lib/utils";
import styles from "./Badge.module.scss";

interface BadgeProps {
  status: statusType;
}

const Badge = ({ status }: BadgeProps) => {
  return (
    <span className={`${styles.badge} ${styles[status]}`}>
      {capitalizeWord(status)}
    </span>
  );
};

export default Badge;
