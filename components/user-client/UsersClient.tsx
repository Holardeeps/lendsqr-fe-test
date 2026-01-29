"use client";

import { useEffect, useState } from "react";

import StatsCard from "@/components/stat-card/StatsCard";
import styles from "./UsersClient.module.scss";
import { tableHeader } from "@/constants";
import { capitalizeWord, getVisiblePages } from "@/lib/utils";
import Badge from "@/components/shared/badge/Badge";
import DropDownFilter from "@/components/filter/DropDownFilter";
import InfoBox from "@/components/shared/info-box/InfoBox";
import { useUserStore } from "@/store/userStore";

type UserClientProps = {
  data: User[];
};

const UsersClient = ({ data }: UserClientProps) => {
  // States to control filter dropdown and info box pop up
  const [filter, setFilter] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  // Pagination
  const [rowsPerPage, setRowsPerPage] = useState(10); // default 10
  const [currentPage, setCurrentPage] = useState(1);

  //   States controling the users list storing, filtering

  const users = useUserStore((state) => state.users); // users from the zustand store
  const setUsers = useUserStore((state) => state.setUsers); // Zustand seZustandtter function
  const filteredData = useUserStore((state) => state.appliedFilter);

  // const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  useEffect(() => {
    if (data && data.length > 0 && users.length === 0) {
      setUsers(data);
    }
  }, [data, users.length, setUsers]); //Gets users data from backend on mount

  // Resetting page on filtering data
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredData]);

  // console.log(users);

  // Filter users dynamically
  const filteredUsers = users.filter((user) => {
    return (
      user.username
        .toLowerCase()
        .includes(filteredData.username.toLowerCase()) &&
      user.email.toLowerCase().includes(filteredData.email.toLowerCase()) &&
      user.phone.includes(filteredData.phone) &&
      user.status.toLowerCase().includes(filteredData.status.toLowerCase()) &&
      user.company.toLowerCase().includes(filteredData.company.toLowerCase()) &&
      (filteredData.date === "" ||
        user.date_joined.startsWith(filteredData.date))
    );
  });

  // pagination control
  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  const totalUsers = filteredUsers.length;
  const activeUsers = filteredUsers.filter((u) => u.status === "active").length;
  const other = filteredUsers.filter((u) => u.company === "lendsqr").length;
  const irorunLendstarUsers = filteredUsers.filter(
    (u) => u.company === "irorun" || u.company === "lendstar",
  ).length;

  const userAnalytics = [
    { title: "users", icon: "/images/friends2-group.png", value: totalUsers },
    {
      title: "active users",
      icon: "/images/b-users-group.png",
      value: activeUsers,
    },
    {
      title: "users with loans",
      icon: "/images/ledger-group.png",
      value: other,
    },
    {
      title: "users with savings",
      icon: "/images/stacked-coins-group.png",
      value: irorunLendstarUsers,
    },
  ];

  const dropForm = (column: string) => {
    setFilter((prev) => (prev === column ? null : column));
  };
  const openInfo = (column: string) => {
    setInfo((prev) => (prev === column ? null : column));
  };

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
        <div className={styles.inner}>
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
                        <img
                          src="/icons/filter.png"
                          alt="filter"
                          className={styles.filterDrop}
                          onClick={(e) => {
                            dropForm(header);
                          }}
                        />
                      )}
                    </div>
                    {filter === header && (
                      <div>
                        <DropDownFilter onClose={() => setFilter(null)} />
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            {/* The body of the user data to be displayed */}
            <tbody>
              {/* Geting the user's data list and displaying */}
              {paginatedUsers.map((user, i) => (
                <tr key={i}>
                  <td>{capitalizeWord(user.company)}</td>
                  <td>{capitalizeWord(user.username)}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.date_joined}</td>
                  <td>
                    <Badge status={user.status} />
                  </td>
                  <td>
                    <div className={styles.infoBox}>
                      <img
                        src="/icons/info-icon.png"
                        alt="info"
                        className=""
                        // onClick={() => setInfo(prev => (prev === i ? null : i))}
                        onClick={() => openInfo(user.lendsqr_id)}
                      />
                      {info === user.lendsqr_id && (
                        <InfoBox
                          id={user.lendsqr_id}
                          onClose={() => setInfo(null)}
                        />
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className={styles.paginationContainer}>
        <span>
          Showing{" "}
          <div className="">
            <select
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setCurrentPage(1); // reset to first page when rows per page changes
              }}
            >
              {[10, 15, 20, 25, 50].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          out of {filteredUsers.length} users
        </span>

        <div className={styles.paginationButtons}>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={styles.direction}
          >
            <img src="/icons/prev.png" alt="prev" />
          </button>

          {/* Numbered page buttons */}
          <div className="">
            {/* {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={
                  currentPage === i + 1 ? styles.activePage : styles.norm
                }
              >
                {i + 1}
              </button>
            ))} */}
            {getVisiblePages(currentPage, totalPages).map((page, index) =>
              page === "..." ? (
                <span key={`ellipsis-${index}`} className={styles.norm}>
                  …
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={
                    currentPage === page ? styles.activePage : styles.norm
                  }
                >
                  {page}
                </button>
              ),
            )}
          </div>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={styles.direction}
          >
            <img src="/icons/next.png" alt="" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default UsersClient;
