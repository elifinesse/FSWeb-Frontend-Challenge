import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";

export default function Header() {
  const textClass = "font-bold text-[15px] tracking-[1.5px]";
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  function handleDarkMode() {
    toggleDarkMode();
  }
  return (
    <>
      <div className="circle-filled"></div>
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
          <p className={`${textClass} text-gri dark:text-white`}>DARK MODE</p>{" "}
          <p className={`${textClass} text-gri`}>|</p>
          <p className={`${textClass} text-gri`}>
            <span className={`${textClass} text-pembe`}>TÜRKÇE</span>
            'YE GEÇ
          </p>
        </nav>
      </header>
    </>
  );
}
