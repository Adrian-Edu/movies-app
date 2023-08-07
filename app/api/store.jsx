import { create } from "zustand";

export const useStore = create((set) => ({
  users: [
    {
      id: 1,
      email: "demo@demo.com",
      password: "parola@7",
    },
    {
      id: 2,
      email: "sweet_florentin@yahoo.com",
      password: "AdrianEdu@7",
    },
  ],

  isLogOut: true,
  isModalOpen: false,

  logIn: () => set({ isLogOut: false }),
  logOut: () => set({ isLogOut: true }),
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));
