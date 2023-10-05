import { create } from "zustand";

export const useStore = create((set) => ({
  users: [
    {
      id: 1,
      name: "denis",
      surname: "demo",
      email: "denis@demo.com",
      password: "deniseprogramator",
    },
    {
      id: 2,
      name: "adrian",
      surname: "edu",
      email: "adrian_edu@yahoo.com",
      password: "Headhunter@7",
    },
  ],

  isLogOut: true,
  isModalOpen: false,

  logIn: () => set({ isLogOut: false }),
  logOut: () => set({ isLogOut: true }),
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),

}));
