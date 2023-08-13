import "./App.css";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { DarkModeContext } from "./DarkModeContext";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const userPref = window.matchMedia("(prefers-color-scheme: dark)");
    if (userPref.matches) {
      document.querySelector("html").classList.add("dark");
    }
    return userPref.matches;
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.querySelector("html").classList.toggle("dark", !darkMode);
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

    // Cleanup function
    return () => mediaQuery.removeEventListener("change", handler);
  };

  useEffect(() => {
    readUserColorPreference();
  }, []);
  return (
    <div className="App">
      <DarkModeContext.Provider
        value={{ darkMode, toggleDarkMode, setDarkMode }}
      >
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </DarkModeContext.Provider>
    </div>
  );
}

export default App;
