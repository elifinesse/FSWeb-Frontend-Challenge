import "./App.css";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { DarkModeContext } from "./DarkModeContext";
import { content } from "./data";
import axios from "axios";

function App() {
  const [lang, setLang] = useState(window.navigator.language);
  const [data, setData] = useState({});
  useEffect(() => {
    if (lang === "tr") {
      axios
        .post("https://reqres.in/api/workintech", content.tr)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    } else {
      axios
        .post("https://reqres.in/api/workintech", content.eng)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }
  }, [lang]);

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

  let access;
  lang === "tr" ? (access = "YÜKLENİYOR") : (access = "LOADING");

  return (
    <div className="App">
      {Object.keys(data).length === 0 ? (
        <p>{access}</p>
      ) : (
        <DarkModeContext.Provider
          value={{ darkMode, toggleDarkMode, setDarkMode, data, setLang }}
        >
          <Hero />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </DarkModeContext.Provider>
      )}
    </div>
  );
}

export default App;
