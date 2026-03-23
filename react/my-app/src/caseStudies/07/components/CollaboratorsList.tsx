import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCollaborators } from "../api/fetchCollaborators";
import { useCollaboratorStore } from "../store/collaboratorStore";

export function CollaboratorsList() {
  const setCollaborators = useCollaboratorStore((s) => s.setCollaborators);
  const collaborators = useCollaboratorStore((s) => s.collaborators);

  const { data, isLoading } = useQuery({
    queryKey: ["collaborators"],
    queryFn: fetchCollaborators,
  });

  useEffect(() => {
    if (data) setCollaborators(data);
  }, [data, setCollaborators]);

  if (isLoading) return <div>Loading collaborators...</div>;

  return (
    <div>
      <h2>Collaborators</h2>
      <ul>
        {collaborators.map((c) => (
          <li key={c.id}>
            {c.name} ({c.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
