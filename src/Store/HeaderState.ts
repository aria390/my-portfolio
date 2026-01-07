import { create } from "zustand";

type TActiveHeader = {
  activeHeader: "Home" | "Projects" | "Tools" | "About" | "Contact";
  setActiveHeader: (
    value: "Home" | "Projects" | "Tools" | "About" | "Contact"
  ) => void;
};

export const useActiveHeader = create<TActiveHeader>()((set) => ({
  activeHeader: "Home",
  setActiveHeader: (value) => set(() => ({ activeHeader: value })),
}));
