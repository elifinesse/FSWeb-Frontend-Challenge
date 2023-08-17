import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";

export default function Header() {
  const textClass = "font-bold text-[15px] tracking-[1.5px]";
  const { darkMode, toggleDarkMode, data, setLang } =
    useContext(DarkModeContext);
  const { header } = data;
  function handleDarkMode() {
    toggleDarkMode();
  }
  function handleClick(e) {
    if (e.target.outerText === "ENGLISH") {
      setLang("eng");
    } else if (e.target.outerText === "TÜRKÇE") {
      setLang("tr");
    }
  }
  return (
    <>
      <div className="circle-filled dark:bg-[#525252]"></div>
      <header>
        <nav className="flex gap-4 pt-4 justify-end	items-center">
          <label className="switch">
            <input
              onChange={handleDarkMode}
              type="checkbox"
              checked={darkMode}
            />
            <span className="slider"></span>
          </label>
          <p className={`${textClass} text-gri dark:text-white`}>
            {darkMode ? header.lm : header.dm}
          </p>{" "}
          <p className={`${textClass} text-gri`}>|</p>
          <p className={`${textClass} text-gri`}>
            {" " + header.prefix + " "}
            <span
              className={`${textClass} text-pembe cursor-pointer`}
              onClick={handleClick}
            >
              {header.lang}
            </span>
            {header.suffix}
          </p>
        </nav>
      </header>
    </>
  );
}
