import { create } from "zustand";

export type Collaborator = {
  id: string;
  name: string;
  email: string;
};

type CollaboratorState = {
  collaborators: Collaborator[];
  setCollaborators: (data: Collaborator[]) => void;
};

export const useCollaboratorStore = create<CollaboratorState>((set) => ({
  collaborators: [],
  setCollaborators: (data) => set({ collaborators: data }),
}));
