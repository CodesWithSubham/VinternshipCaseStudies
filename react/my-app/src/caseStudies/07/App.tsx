import { CollaboratorsList } from "./components/CollaboratorsList";
import HistoryPanel from "./components/HistoryPanel";
import SessionPanel from "./components/SessionPanel";
import { useHistoryStore } from "./store/historyStore";

export default function App() {
  const addHistoryEntry = useHistoryStore((s) => s.addHistoryEntry);
  const history = useHistoryStore((s) => s.history);

  const simulateAction = () => {
    addHistoryEntry({
      noteId: "note-1",
      action: "edit",
      timestamp: Date.now(),
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>CS07 - Advanced Zustand</h1>

      <button onClick={simulateAction}>Add History Entry</button>

      <h3>History</h3>
      <ul>
        {history.map((h) => (
          <li key={h.timestamp}>
            {h.noteId} - {h.action} - {new Date(h.timestamp).toLocaleTimeString()}
          </li>
        ))}
      </ul>

      <hr />

      <CollaboratorsList />

      <hr />

      <HistoryPanel />

      <hr />

      <SessionPanel />
    </div>
  );
}
