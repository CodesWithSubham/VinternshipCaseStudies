import type { Collaborator } from "../store/collaboratorStore";

export async function fetchCollaborators(): Promise<Collaborator[]> {
  // Simulate network delay
  await new Promise((res) => setTimeout(res, 800));

  return [
    { id: "1", name: "Alice", email: "alice@mail.com" },
    { id: "2", name: "Bob", email: "bob@mail.com" },
    { id: "3", name: "Charlie", email: "charlie@mail.com" },
  ];
}
