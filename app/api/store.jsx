import { create } from "zustand";

export const useStore = create((set) => ({
  users: [
    {
      id: 1,
      email: "denis@demo.com",
      password: "deniseprogramator",
    },
    {
      id: 2,
      email: "adrian_edu@yahoo.com",
      password: "adrianedu@7",
    },
  ],

  isLogOut: true,
  isModalOpen: false,

  logIn: () => set({ isLogOut: false }),
  logOut: () => set({ isLogOut: true }),
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));
