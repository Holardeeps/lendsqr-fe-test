import StatsCard from "@/components/stat-card/StatsCard";
import styles from "./page.module.scss";
import { tableHeader, userAnalytics, usersMock } from "@/constants";
import { capitalizeWord, formatDateString } from "@/lib/utils";
import Badge from "@/components/shared/badge/Badge";

const page = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.header}>Users</h1>

      {/* Stats Card Container */}
      {/* TODO: add counting values up package */}
      <section className={styles.statContainer}>
        {/* mapping through stats card array */}
        {userAnalytics.map((data, i) => (
          // Stats card component to handle the user statistics data
          <StatsCard key={i} data={data} />
        ))}
      </section>

      {/* User List data section */}
      <section className={styles.userTable}>
        <table>
          {/* Defining the sizes of each columns for the userlist table */}
          <colgroup>
            <col style={{ width: "15.13%" }} />
            <col style={{ width: "13.82%" }} />
            <col style={{ width: "19.17%" }} />
            <col style={{ width: "16.17%" }} />
            <col style={{ width: "20.08%" }} />
            <col style={{ width: "13.04%" }} />
            <col style={{ width: "2.61%" }} />
          </colgroup>

          {/* Header titles of the table */}
          <thead>
            <tr>
              {/* Mapping through the header data for the table  */}
              {tableHeader.map((header) => (
                <th scope="col" aria-label={header} key={header}>
                  <div className={styles.title}>
                    <h2>{header}</h2>
                    {/* controlling the content of the 7th column. (empty header != filter icon)...NB can also use the index of the last item in the array */}
                    {header === "" ? (
                      ""
                    ) : (
                      <img src="/icons/filter.png" alt="filter" />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* TODO: control error state for error and loading state for when data is being fetched */}
          {/* The body of the user data to be displayed */}
          <tbody>
            {/* Geting the user's data list and displaying */}
            {usersMock.map((user, i) => (
              <tr key={i}>
                <td>{capitalizeWord(user.organization)}</td>
                <td>{capitalizeWord(user.userName)}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{formatDateString(user.dateJoined)}</td>
                <td>
                  <Badge status={user.status} />
                </td>
                <td>
                  <img src="/icons/info-icon.png" alt="info" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default page;
