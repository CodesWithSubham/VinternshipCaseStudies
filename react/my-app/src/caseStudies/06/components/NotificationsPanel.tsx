import { useDesignHubStore } from "../store/store";

const NotificationsPanel = () => {
  const notifications = useDesignHubStore((s) => s.notifications);
  const addNotification = useDesignHubStore((s) => s.addNotification);
  const markAsRead = useDesignHubStore((s) => s.markAsRead);
  const clearNotifications = useDesignHubStore((s) => s.clearNotifications);

  const unread = notifications.filter((n) => !n.read);

  return (
    <div>
      <h3>Unread Notifications ({unread.length})</h3>

      <button onClick={() => addNotification("New design updated!")}>Add Notification</button>

      <button onClick={clearNotifications}>Clear All</button>

      <ul>
        {unread.map((n) => (
          <li key={n.id}>
            {n.message}
            <button onClick={() => markAsRead(n.id)}>Mark Read</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPanel;
