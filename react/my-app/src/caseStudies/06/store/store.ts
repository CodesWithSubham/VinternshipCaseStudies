import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { type NotificationSlice, createNotificationSlice } from "./slices/notificationSlice";
import { createUserSlice, type UserSlice } from "./slices/userSlice";
import { createFileSlice, type FileSlice } from "./slices/fileSlice";
import { createCommentSlice, type CommentSlice } from "./slices/commentSlice";

export type DesignHubStore = UserSlice & FileSlice & CommentSlice & NotificationSlice;

export const useDesignHubStore = create<DesignHubStore>()(
  devtools(
    persist(
      (...a) => ({
        ...createUserSlice(...a),
        ...createFileSlice(...a),
        ...createCommentSlice(...a),
        ...createNotificationSlice(...a), // ← Added
      }),
      { name: "designhub-store" },
    ),
  ),
);
