import Header from "./Header";
import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";

function Hero() {
  const {
    greeting,
    name,
    h2,
    first_black,
    first_pink,
    second_black,
    second_pink,
    third_black,
    invite,
  } = useContext(DarkModeContext).data.hero;
  return (
    <div className="welcome-section bg-bg-gri dark:bg-dark-grey pb-20">
      <div className="container">
        <Header />
        <div className="hero-content">
          <div className="hero-text">
            <div className="flex flex-col gap-5">
              <p className="text-[30px] tracking-[3px] dark:text-white">
                {greeting}👋
              </p>
              <h2 className="hero-h2 text-blackish dark:text-white">
                <div className="highlighted">
                  <p className="dark:text-white">{name} </p>
                </div>{" "}
                {h2}
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-5">
                <img src="./icons/LinkedIn.svg" alt="linkedIn logo" />
                <img src="./icons/github.svg" alt="github logo" />
              </div>
              <p className="contact-info dark:text-white">
                {first_black} <span className="text-pembe">{first_pink}</span>{" "}
                {second_black}{" "}
                <span className="text-pembe">{second_pink} </span> {third_black}
                <br /> {invite}{" "}
                <span className="text-pembe">elysaglam@gmail.com</span>
              </p>
            </div>
          </div>
          <div className="hero-img">
            <img src="./images/foto.png" alt="foto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
