import { create } from "zustand";

type Store = {
  isOpen: Boolean;
  setIsOpen: (isOpen: Boolean) => void;
};

export const useStore = create<Store>()((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: Boolean) => set({ isOpen }),
}));
