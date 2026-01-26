import styles from "./StatCard.module.scss";

type StatsCardProps = {
  data: userAnalyticsType;
};

const StatsCard = ({ data }: StatsCardProps) => {
  return (
    <div className={styles.cardBox}>
      <img src={data.icon} alt="" />
      <h2>{data.title}</h2>
      <h1>{data.value}</h1>
    </div>
  );
};

export default StatsCard;
