import { create } from "zustand";

type TActiveHeader = {
  activeHeader: "Home" | "Projects" | "Tools" | "Experience" | "Contact";
  setActiveHeader: (
    value: "Home" | "Projects" | "Tools" | "Experience" | "Contact"
  ) => void;
};

export const useActiveHeader = create<TActiveHeader>()((set) => ({
  activeHeader: "Home",
  setActiveHeader: (value) => set(() => ({ activeHeader: value })),
}));
