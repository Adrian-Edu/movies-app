import { createStore } from "zustand";

const store = createStore((set) => ({
  users: [{ email: "adrian_edu@yahoo.com", password: "Headhunter@7" }],
  isLogOut: true,
}));

export default store;

/*

1. Trimit in store state-ul care controleaza daca userul este sau nu logat - const [isUserLoggedOut, setIsUserLogin] = useState(true);
2. Din componenta care se afla in page/login/page - daca email-ul si parola sunt cele din store, modific state-ul de mai sus.

*/
