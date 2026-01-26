import styles from "./DropDownFilter.module.scss";

const DropDownFilter = () => {
  return (
    <div className={styles.filterForm}>
      <label>
        Organization
        <select>
          <option value="" disabled hidden>
            Select
          </option>
          <option value="">lendsqr</option>
          <option value="">lendstar</option>
          <option value="">irorun</option>
        </select>
      </label>

      <label>
        Username
        <input type="text" placeholder="User" />
      </label>

      <label>
        Email
        <input type="text" placeholder="Email" />
      </label>

      <label>
        Date
        <div className={styles.date}>
          <input placeholder="Date" />
          <img src="/icons/calendar.png" alt="calendar" />
        </div>
      </label>

      <label>
        Phone Number
        <input type="text" placeholder="Phone Number" />
      </label>

      <label>
        Organization
        <select>
          <option value="" disabled hidden>
            Select
          </option>
          <option value="">active</option>
          <option value="">inactive</option>
          <option value="">pending</option>
          <option value="">blacklisted</option>
        </select>
      </label>

      <div className={styles.actions}>
        <button className={styles.reset}>Reset</button>
        <button className={styles.filter}>Filter</button>
      </div>
    </div>
  );
};

export default DropDownFilter;
