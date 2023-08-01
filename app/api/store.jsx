import { create } from "zustand";

export const useStore = create((set) => ({
  users: [
    {
      id: 1,
      email: "demo@demo.com",
      password: "demo@demo.com",
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

/*

const usersMap = users.map((item) => {
    const users = item;
    const mapedUsersValues = Object.entries(users);
    for (const [key, value] of mapedUsersValues) {
      const date = `${key} : ${value}`;
      console.log({date});
    }

    return mapedUsersValues;
  });

  */
