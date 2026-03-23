import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type Role = "admin" | "user";

type SessionState = {
  userId: string;
  token: string;
  expiresAt: number;
  role: Role;

  setSession: (data: { userId: string; token: string; expiresAt: number; role?: Role }) => void;

  clearSession: () => void;
};

export const useSessionStore = create<SessionState>()(
  devtools(
    persist(
      immer((set) => ({
        userId: "",
        token: "",
        expiresAt: 0,
        role: "user",

        setSession: ({ userId, token, expiresAt, role }) =>
          set((state) => {
            state.userId = userId;
            state.token = token;
            state.expiresAt = expiresAt;
            state.role = role ?? "user";
          }),

        clearSession: () =>
          set((state) => {
            state.userId = "";
            state.token = "";
            state.expiresAt = 0;
            state.role = "user";
          }),
      })),
      {
        name: "collabnotes-session",
        storage: createJSONStorage(() => localStorage),

        partialize: (state) => ({
          userId: state.userId,
          token: state.token,
        }),

        version: 2,
        migrate: (persisted: unknown, version) => {
          const state = persisted as Partial<SessionState>;
          if (version < 2) {
            return {
              ...state,
              role: "user",
            };
          }
          return state as SessionState;
        },
      },
    ),
  ),
);
