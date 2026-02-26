import type { StateCreator } from "zustand";

export type User = {
  id: string;
  name: string;
};

export interface UserSlice {
  users: User[];
  addUser: (user: User) => void;
}

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (set) => ({
  users: [],
  addUser: (user) =>
    set((state) => ({
      users: [...state.users, user],
    })),
});
