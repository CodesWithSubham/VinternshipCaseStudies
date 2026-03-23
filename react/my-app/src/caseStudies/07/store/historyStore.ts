import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";

export type HistoryEntry = {
  noteId: string;
  action: string;
  timestamp: number;
};

type HistoryState = {
  history: HistoryEntry[];
  addHistoryEntry: (entry: HistoryEntry) => void;
  clearHistory: () => void;
};

export const useHistoryStore = create<HistoryState>()(
  devtools(
    persist(
      immer<HistoryState>((set) => ({
        history: [],

        addHistoryEntry: (entry) =>
          set((state) => {
            state.history.push(entry);
          }),

        clearHistory: () =>
          set((state) => {
            state.history = [];
          }),
      })),
      { name: "history-store" },
    ),
  ),
);
