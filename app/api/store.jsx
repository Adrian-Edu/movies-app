import { create } from "zustand";

export const useStore = create((set) => ({
  existentUsers: [{ email: "adrian_edu@yahoo.com", password: "Headhunter@7" }],
  nonexistentUsers: [],
  isLogOut: true,
  isModalOpen: false,

  logIn: () => set((state) => ({ isLogOut: !state.isLogOut })),
  logOut: () => set((state) => ({ isLogOut: !state.isLogOut })),
  openModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
  closeModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
}));
