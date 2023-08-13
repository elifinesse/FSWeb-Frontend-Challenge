import Header from "./Header";

function Hero() {
  return (
    <div className="welcome-section bg-bg-gri dark:bg-dark-grey">
      <div className="container">
        <Header />
        <div className="hero-content">
          <div className="hero-text">
            <div className="flex flex-col gap-5">
              <p className="text-[30px] tracking-[3px] dark:text-white">
                Hi!👋
              </p>
              <h2 className="hero-h2 text-blackish dark:text-white">
                <div className="highlighted">
                  <p className="dark:text-white">I am Elif. </p>
                </div>{" "}
                I’m a full-stack developer. I can craft solid and scalable
                frontend products. Let’s meet!
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-5">
                <img src="./icons/LinkedIn.svg" alt="linkedIn logo" />
                <img src="./icons/github.svg" alt="github logo" />
              </div>
              <p className="contact-info dark:text-white">
                Currently <span className="text-pembe">Freelancing</span> for{" "}
                <span className="text-pembe">UX, UI, & Web Design </span>{" "}
                Projects.
                <br /> Invite me to join your team -{" "}
                <span className="text-pembe">pratamaiosi@gmail.com</span>
              </p>
            </div>
          </div>
          <div className="hero-img">
            <img src="./images/foto.png" alt="foto" />
          </div>
        </div>
        <div className="semi-circle">
          <div className="sc-inner"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
