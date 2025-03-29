import { createContext, useContext, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import Sun and Moon icons
import MyMood from "./UseReducerExample.jsx";

// Create a ThemeContext with a default value
const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Define background and text colors based on theme
  const backgroundColor = theme === "light" ? "#f5f5f5" : "#1e1e2f"; // Light (light gray) & Dark (purple)
  const textColor = theme === "light" ? "#000" : "#e0e0e0"; // Black text for light, white text for dark

  return (
    <div
      style={{
        backgroundColor,
        color: textColor,
        height: "100vh",
        position: "relative", // Ensure the parent container is positioned
        transition: "background-color 0.5s ease-in-out",
      }}
    >
      <button
        onClick={toggleTheme}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          background:backgroundColor,
          // background: "rgba(255, 255, 255, 0.2)", // Glassmorphism effect
          backdropFilter: "blur(10px)", // Blurred background
          border: "none",
          cursor: "pointer",
          fontSize: "28px",
          padding: "10px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Soft shadow
          transition: "all 0.3s ease-in-out",
          color: textColor,
        }}
      >
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>
          Current Theme: {theme.toUpperCase()}
        </p>
        <MyMood/>
      </div>
    </div>
  );
};

const Theme = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};

export {ThemeProvider,ThemedComponent};
export default Theme;
