import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  // On mount, check localStorage for theme
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark-mode");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark-mode");
      setDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  return (
    <button
      className="theme-toggle-button"
      id="modeToggle"
      onClick={toggleTheme}
      title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <FontAwesomeIcon
        icon={faCircleHalfStroke}
        className="theme-icon fs-4"
        style={{
          transform: dark ? "scaleX(-1)" : "none",
          transition: "transform 0.3s ease, color 0.3s ease",
          color: dark ? "#f5f5f5" : "#333",
        }}
      />
    </button>
  );
};

export default ThemeToggle;
