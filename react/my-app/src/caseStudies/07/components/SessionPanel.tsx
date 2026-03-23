import { useSessionStore } from "../store/sessionStore";

export default function SessionPanel() {
  const { userId, role, setSession, clearSession } = useSessionStore();

  return (
    <div>
      <h3>Session</h3>

      <button
        onClick={() =>
          setSession({
            userId: "u1",
            token: "abc123",
            expiresAt: Date.now() + 10000,
          })
        }
      >
        Login
      </button>

      <button onClick={clearSession}>Logout</button>

      <p>User: {userId || "None"}</p>
      <p>Role: {role}</p>
    </div>
  );
};

