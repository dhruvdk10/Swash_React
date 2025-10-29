import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const ThemeToggle = () => {
  const [light, setLight] = useState(false);

  // On mount, check localStorage for theme
  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      document.documentElement.classList.add("light-mode");
      setLight(true);
    } else {
      document.documentElement.classList.remove("light-mode");
      setLight(false);
    }
  }, []);

  const toggleTheme = () => {
    if (light) {
      document.documentElement.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
      setLight(false);
    } else {
      document.documentElement.classList.add("light-mode");
      localStorage.setItem("theme", "light");
      setLight(true);
    }
  };

  return (
    <button
      className="theme-toggle-button"
      id="modeToggle"
      onClick={toggleTheme}
      title={light ? "Switch to Dark Mode" : "Switch to Light Mode"}
      aria-label={light ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      <FontAwesomeIcon
        icon={faCircleHalfStroke}
        className="theme-icon fs-4"
        style={{
          transform: light ? "none" : "scaleX(-1)",
          transition: "transform 0.3s ease, color 0.3s ease",
          color: light ? "rgb(138, 102, 70)" : "#C0A200",
        }}
      />
    </button>
  );
};

export default ThemeToggle;
