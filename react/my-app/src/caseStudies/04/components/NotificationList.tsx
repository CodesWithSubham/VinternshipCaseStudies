import useNotificationStore from "../store/notificationStore";

const NotificationList = () => {
  const notifications = useNotificationStore((s) => s.notifications);
  const markAsRead = useNotificationStore((s) => s.markAsRead);
  const addNotification = useNotificationStore((s) => s.addNotification);

  return (
    <div>
      <h3>Notifications</h3>

      <button onClick={() => addNotification("New task added!", "success")}>
        Add Notification
      </button>

      <ul>
        {notifications
          .filter((n) => !n.read)
          .map((n) => (
            <li key={n.id}>
              <strong>{n.type.toUpperCase()}</strong>: {n.message}
              <button onClick={() => markAsRead(n.id)}>Mark Read</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NotificationList;
