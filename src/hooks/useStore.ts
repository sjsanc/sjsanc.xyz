import create from "zustand";

export interface Store {
  data: any;
  setData: any;
}

export const useStore = create<Store>((set) => ({
  data: "yo",
  setData: (newState) => set((state) => ({ data: newState })),
}));
