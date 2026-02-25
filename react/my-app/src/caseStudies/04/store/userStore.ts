import { create } from "zustand";

export interface User {
  id: string;
  name: string;
  email: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: {
    id: "1",
    name: "Alice",
    email: "alice@example.com",
  },
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

export default useUserStore;
