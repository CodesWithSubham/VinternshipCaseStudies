import NotificationList from "./components/NotificationList";
import Profile from "./components/Profile";
import TaskList from "./components/TaskList";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { ThemeProvider } from "./context/ThemeProvider";

const Case04 = () => {
  return (
    <ThemeProvider>
      <h1>Case 04: State Management (Context + Zustand)</h1>

      <ThemeSwitcher />
      <hr />
      <Profile />
      <hr />
      <TaskList />
      <hr />
      <NotificationList />
    </ThemeProvider>
  );
};

export default Case04;
