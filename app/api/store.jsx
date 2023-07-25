import { create } from "zustand";

export const useStore = create((set) => ({
  existentUsers: [
    { email: "demo@demo.com", password: "demo@demo.com" },
    { email: "sweet_florentin@yahoo.com", password: "AdrianEdu@7" },
  ],

  nonexistentUsers: [],
  isLogOut: true,
  isModalOpen: false,

  logIn: () => set((state) => ({ isLogOut: !state.isLogOut })),
  logOut: () => set((state) => ({ isLogOut: !state.isLogOut })),
  openModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
  closeModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
}));
