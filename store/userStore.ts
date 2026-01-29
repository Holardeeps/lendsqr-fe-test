import { create } from "zustand";

import {
  getRandomStatus,
  cleanPhoneNumber,
  truncateEmailLocalPart,
  formatDateString,
  getRandomCompany,
} from "@/lib/utils";

type UserStore = {
  users: User[];
  setUsers: (users: User[]) => void;
  updateUser: (user: User, updates: Partial<User>) => void;
  // Filter to collect user filter values
  filter: {
    username: string;
    email: string;
    phone: string;
    status: string;
    company: string;
    date: string;
  };
  // storing the filtered data
  appliedFilter: UserStore["filter"];
  setFilter: (filter: Partial<UserStore["filter"]>) => void;
  applyFilters: () => void;
  resetFilters: () => void;
  getUserById: (id: string) => User | undefined;
};

export const DEFAULT_FILTERS: UserStore["filter"] = {
  username: "",
  email: "",
  phone: "",
  status: "",
  company: "",
  date: "",
};

export const useUserStore = create<UserStore>((set, get) => ({
  users: [],
  setUsers: (users) => {
    // Cleaning the data i'm getting from the backend
    const cleanedUsers = users.map((user) => ({
      ...user, // keeping all fields by default

      // Applying data cleanup transformation:
      status:
        user.status &&
        ["active", "inactive", "pending", "blacklisted"].includes(user.status)
          ? user.status
          : getRandomStatus(), // randomize status
      phone: cleanPhoneNumber(user.phone), // clean phone number
      company:
        user.company && ["lendsqr", "lendstar", "irorun"].includes(user.company)
          ? user.company
          : getRandomCompany(), // get company ["lendstar", "lendsqr", "irorun"]
      email: truncateEmailLocalPart(user.email), // limit email local part to 8 chars
      date_joined: formatDateString(user.date_joined), // format date nicely
    }));
    set({ users: cleanedUsers });
  },
  updateUser: (user, updates) =>
    set((state) => ({
      users: state.users.map((u) =>
        u.lendsqr_id === user.lendsqr_id ? { ...u, ...updates } : u,
      ),
    })),
  filter: DEFAULT_FILTERS,
  appliedFilter: DEFAULT_FILTERS,
  setFilter: (newFilter) =>
    set((state) => ({
      filter: { ...state.filter, ...newFilter },
    })),
  applyFilters: () => {
    set((state) => ({
      appliedFilter: state.filter,
    }));
  },
  resetFilters: () => {
    set({ filter: DEFAULT_FILTERS, appliedFilter: DEFAULT_FILTERS });
  },
  getUserById: (id: string) => {
    return get().users.find((user) => user.lendsqr_id === id);
  },
}));
