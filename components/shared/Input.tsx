import styles from "./Input.module.scss";

const Input = () => {
  return (
    <div className={styles.input}>
      <input type="text" placeholder="Search for anything" />
      <span>
        <img src="/icons/search.png" alt="search logo" />
      </span>
    </div>
  );
};

export default Input;
