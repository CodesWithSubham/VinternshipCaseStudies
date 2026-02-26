import type { StateCreator } from "zustand";

export type Comment = {
  id: string;
  text: string;
};

export interface CommentSlice {
  comments: Comment[];
  addComment: (comment: Comment) => void;
}

export const createCommentSlice: StateCreator<CommentSlice, [], [], CommentSlice> = (set) => ({
  comments: [],
  addComment: (comment) =>
    set((state) => ({
      comments: [...state.comments, comment],
    })),
});
