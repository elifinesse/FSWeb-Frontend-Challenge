import "./App.css";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { LanguageContext } from "./LanguageContext";
import { content } from "./data";
import axios from "axios";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [lang, setLang] = useState(
    localStorage.getItem("lang") === null
      ? window.navigator.language
      : localStorage.getItem("lang")
  );
  const [data, setData] = useState({});
  useEffect(() => {
    if (lang.startsWith("tr")) {
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

  const { darkMode } = useDarkMode();

  let access;
  lang.startsWith("tr") ? (access = "YÜKLENİYOR") : (access = "LOADING");

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      {Object.keys(data).length === 0 ? (
        <p>{access}</p>
      ) : (
        <LanguageContext.Provider value={{ data, setLang, lang }}>
          <Hero />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </LanguageContext.Provider>
      )}
    </div>
  );
}

export default App;
