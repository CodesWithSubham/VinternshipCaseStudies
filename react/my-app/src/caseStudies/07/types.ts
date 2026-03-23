export type Role = "admin" | "user";

export interface Collaborator {
  id: string;
  name: string;
}

export interface HistoryEntry {
  noteId: string;
  action: "create" | "edit" | "delete";
  timestamp: number;
}
