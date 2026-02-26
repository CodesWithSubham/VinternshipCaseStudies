import React from "react";
import { useDesignHubStore } from "./store/store";

const Case06: React.FC = () => {
  const { users, addUser, files, addFile, comments, addComment } =
    useDesignHubStore();

  return (
    <div style={{ padding: 20 }}>
      <h2>Smart Collaboration Dashboard</h2>

      <button
        onClick={() =>
          addUser({ id: Date.now().toString(), name: "John Doe" })
        }
      >
        Add User
      </button>

      <button
        onClick={() =>
          addFile({ id: Date.now().toString(), name: "Project.docx" })
        }
      >
        Add File
      </button>

      <button
        onClick={() =>
          addComment({
            id: Date.now().toString(),
            text: "Looks good!",
          })
        }
      >
        Add Comment
      </button>

      <hr />

      <h3>Users</h3>
      {users.map((u) => (
        <div key={u.id}>{u.name}</div>
      ))}

      <h3>Files</h3>
      {files.map((f) => (
        <div key={f.id}>{f.name}</div>
      ))}

      <h3>Comments</h3>
      {comments.map((c) => (
        <div key={c.id}>{c.text}</div>
      ))}
    </div>
  );
};

export default Case06;
