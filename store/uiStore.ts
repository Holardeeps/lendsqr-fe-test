import { create } from "zustand";

interface UIStore {
  isSideBarOpen: boolean;
  toggleSideBar: () => void;
}

export const useUiStore = create<UIStore>((set) => ({
  isSideBarOpen: false,
  toggleSideBar: () =>
    set((state) => ({
      isSideBarOpen: !state.isSideBarOpen,
    })),
}));
