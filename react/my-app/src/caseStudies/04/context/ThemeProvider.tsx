import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () =>
    setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          background: theme === "light" ? "#fff" : "#222",
          color: theme === "light" ? "#000" : "#fff",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};