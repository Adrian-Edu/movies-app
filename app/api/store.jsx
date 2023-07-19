import { create } from "zustand";

export const useStore = create((set) => ({
  existentUsers: [{ email: "adrian_edu@yahoo.com", password: "Headhunter@7" }],
  nonexistentUsers: [],
  isLogOut: true,

  logIn: () => set((state) => ({ isLogOut: !state.isLogOut })),
  logOut: () => set((state) => ({ isLogOut: !state.isLogOut })),
}));

/*

1. Trimit in store state-ul care controleaza daca userul este sau nu logat - const [isUserLoggedOut, setIsUserLogin] = useState(true);
2. Din componenta care se afla in page/login/page - daca email-ul si parola sunt cele din store, modific state-ul de mai sus.

*/
