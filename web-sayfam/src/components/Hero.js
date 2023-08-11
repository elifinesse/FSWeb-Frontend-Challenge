import Header from "./Header";

function Hero() {
  return (
    <div className="welcome-section bg-bg-gri">
      <div className="container">
        <Header />
        <div>
          <div>
            <p className="text-[30px] tracking-[3px]">Hi!👋</p>
            <h2 className="hero-h2">
              <div className="highlighted">
                <p>I am Elif. </p>
              </div>
              I’m a full-stack developer. I can craft solid and scalable
              frontend products. Let’s meet!
            </h2>
            <div>
              <button>Github</button>
              <button>Linkedin</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
