"use client";

import { useState } from "react";

import { DEFAULT_FILTERS, useUserStore } from "@/store/userStore";
import styles from "./DropDownFilter.module.scss";

type InfoBoxProps = {
  onClose: () => void;
};

const DropDownFilter = ({ onClose }: InfoBoxProps) => {
  const users = useUserStore((state) => state.users); // users from the zustand store
  const filteredValues = useUserStore((state) => state.filter);
  const setFilteredUsers = useUserStore((state) => state.setFilter);
  const applyFilters = useUserStore((state) => state.applyFilters);
  const resetFilters = useUserStore((state) => state.resetFilters);

  const [filterInput, setFilterInput] = useState(filteredValues);

  const ORGANIZATIONS = Array.from(new Set(users.map((user) => user.company)));
  const STATUS_OPTIONS: statusType[] = [
    "active",
    "inactive",
    "pending",
    "blacklisted",
  ];

  const handleApplyFilters = () => {
    setFilteredUsers(filterInput); // update store appliedFilter
    applyFilters(); // apply the filter inputs to the table
    onClose(); // close modal
  };

  const handleResetFilters = () => {
    setFilteredUsers(DEFAULT_FILTERS); // reset store filter
    applyFilters(); // apply the empty filter to table
    setFilterInput(DEFAULT_FILTERS); // reset modal inputs
    onClose(); // close modal
  };

  const handleChange = (key: keyof typeof filterInput, value: string) => {
    setFilterInput((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className={styles.filterForm}>
      <div className={styles.formBox}>
        <label>
          Organization
          <select
            value={filterInput.company}
            onChange={(e) => handleChange("company", e.target.value)}
          >
            <option value="" disabled hidden>
              Select
            </option>
            {ORGANIZATIONS.map((org) => (
              <option key={org} value={org}>
                {org}
              </option>
            ))}
            {/* <option value="">lendsqr</option>
          <option value="">lendstar</option>
          <option value="">irorun</option> */}
          </select>
        </label>

        <label>
          Username
          <input
            type="text"
            placeholder="User"
            value={filterInput.username}
            onChange={(e) => handleChange("username", e.target.value)}
          />
        </label>

        <label>
          Email
          <input
            type="text"
            placeholder="Email"
            value={filterInput.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </label>

        <label>
          Date
          <div className={styles.date}>
            <input
              placeholder="Date"
              value={filterInput.date}
              onChange={(e) => handleChange("date", e.target.value)}
            />
            <img src="/icons/calendar.png" alt="calendar" />
          </div>
        </label>

        <label>
          Phone Number
          <input
            type="text"
            placeholder="Phone Number"
            value={filterInput.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </label>

        <label>
          Status
          <select
            value={filterInput.status}
            onChange={(e) => handleChange("status", e.target.value)}
          >
            <option value="" disabled hidden>
              Select
            </option>
            {/* Controlling the user status selection */}
            {STATUS_OPTIONS.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
            {/* <option value="">active</option>
          <option value="">inactive</option>
          <option value="">pending</option>
          <option value="">blacklisted</option> */}
          </select>
        </label>
      </div>

      <div className={styles.actions}>
        <button className={styles.reset} onClick={handleResetFilters}>
          Reset
        </button>
        <button className={styles.filter} onClick={handleApplyFilters}>
          Filter
        </button>
      </div>
    </div>
  );
};

export default DropDownFilter;
