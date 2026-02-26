import type { StateCreator } from "zustand";

export type FileItem = {
  id: string;
  name: string;
};

export interface FileSlice {
  files: FileItem[];
  addFile: (file: FileItem) => void;
}

export const createFileSlice: StateCreator<FileSlice, [], [], FileSlice> = (set) => ({
  files: [],
  addFile: (file) =>
    set((state) => ({
      files: [...state.files, file],
    })),
});
