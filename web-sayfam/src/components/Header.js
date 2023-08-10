export default function Header() {
  return (
    <div className="welcome-section">
      <header>
        <nav className="flex text-xl gap-4	pt-8">
          <a
            className="basis-[70%] text-right	self-end pr-4 font-bold text-limey tracking-[1.5px]"
            href="#"
          >
            TÜRKÇE'YE GEÇ
          </a>
          <p className="font-bold text-electric-blue tracking-[1.5px]">
            DARK MODE
          </p>
        </nav>
        <div>
          <h2 className="text-limey">elif</h2>
          <nav>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </header>
      <div>
        <div>
          <h1>I am a Frontend Developer...</h1>
          <h3>
            ...who likes to craft solid and scalable frontend products with
            great user experiences.
          </h3>
          <div>
            <button>Github</button>
            <button>Linkedin</button>
          </div>
        </div>
      </div>
    </div>
  );
}
