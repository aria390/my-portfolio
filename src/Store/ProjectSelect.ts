import { create } from "zustand";

type TActiveProject = {
  activeProject: "All" | "ReactAndNext" | "TsAndJs";
  SetactiveProject: (value: "All" | "ReactAndNext" | "TsAndJs") => void;
};

export const useActiveProject = create<TActiveProject>()((set) => ({
  activeProject: "All",
  SetactiveProject: (value) => set(() => ({ activeProject: value })),
}));
