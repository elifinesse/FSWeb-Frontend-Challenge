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

  let icerik;
  let access;
  if (lang.startsWith("tr")) {
    icerik = content.tr;
    access = "YÜKLENİYOR...";
  } else {
    icerik = content.eng;
    access = "LOADING...";
  }

  useEffect(() => {
    axios
      .post("https://reqres.in/api/workintech", icerik)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [lang]);

  const { darkMode } = useDarkMode();

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
