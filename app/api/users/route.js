import { create } from "zustand";

const userData = create((set) => ({
  userExists: { email: "", password: "" },
  newUser: { name: "", surname: "", email: "", password: "" },
}));

export default userData;
