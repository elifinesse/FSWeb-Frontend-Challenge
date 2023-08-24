import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    const userPref = window.matchMedia("(prefers-color-scheme: dark)");
    if (localStorage.getItem("darkmode") !== null) {
      return JSON.parse(localStorage.getItem("darkmode"));
    } else if (userPref.matches) {
      document.querySelector("html").classList.add("dark");
    }
    return userPref.matches;
  });
  useEffect(() => {
    const initialDarkMode = () => {
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    initialDarkMode();
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkmode", JSON.stringify(newDarkMode));
    document.querySelector(".App").classList.toggle("dark", newDarkMode);
  };

  const readUserColorPreference = () => {
    const handler = ({ matches }) => {
      if (matches) {
        console.log("change to dark mode!");
        setDarkMode(true);
        document.querySelector("html").classList.add("dark");
      } else {
        console.log("change to light mode!");
        setDarkMode(false);
        document.querySelector("html").classList.remove("dark");
      }
    };
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  };

  useEffect(() => {
    readUserColorPreference();
  }, []);
  return { darkMode, toggleDarkMode };
}
