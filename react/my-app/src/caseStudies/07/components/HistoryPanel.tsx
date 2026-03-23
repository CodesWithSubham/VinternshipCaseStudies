import { useHistoryStore } from "../store/historyStore";

export default function HistoryPanel() {
  const history = useHistoryStore((s) => s.history);
  const clearHistory = useHistoryStore((s) => s.clearHistory);

  return (
    <div>
      <h3>History</h3>
      <button onClick={clearHistory}>Clear</button>

      <ul>
        {history.map((h, i) => (
          <li key={i}>
            {h.action} → {h.noteId} ({new Date(h.timestamp).toLocaleTimeString()})
          </li>
        ))}
      </ul>
    </div>
  );
};

