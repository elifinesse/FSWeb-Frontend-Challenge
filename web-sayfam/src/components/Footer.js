import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";

export default function Footer() {
  const { text_prev, highlight, text_end, blog } =
    useContext(DarkModeContext).data.footer;
  return (
    <div className="skills-section dark:bg-[#484148] pb-20">
      <div className="container">
        <footer>
          <div className="footer-text ">
            <p className="dark:text-white">
              {text_prev}{" "}
              <span className="blue-highlight">
                <span className="footer-text dark:text-white">{highlight}</span>
              </span>{" "}
              {text_end}
            </p>
          </div>
          <div className="footer-links">
            <a href="#" className="text-[#1769FF]">
              Github
            </a>
            <a href="#" className="dark:text-white">
              {blog}
            </a>
            <a href="#" className="text-[#0077B5]">
              LinkedIn
            </a>
            <a href="#" className="text-pembe">
              Email
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
