import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

export const useStore = create((
   persist(
      (set, get) => ({
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
      }),
      {
        storage: createJSONStorage(() => sessionStorage)
      }
   )
))


/*

import { create } from "zustand";
import { StateStorage } from 'zustand/middleware'

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


*/