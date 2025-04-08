import { create } from "zustand";

const storedUser = JSON.parse(localStorage.getItem("currentUser"));

const useCurrentUser = create((set) => ({
  currentUser: storedUser ?? {
    firstname: null,
    lastName: null,
    address: null,
    city: null,
    zipCode: null,
    cellNumber: null,
    state: null,
    email: null,
    username: null,
    password: null,
  },
  setCurrentUser: (newUser) => {
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    set({ currentUser: newUser });
  },
}));

export default useCurrentUser;
