export default function Footer() {
  return (
    <div className="skills-section dark:bg-[#484148] pb-20">
      <div className="container">
        <footer>
          <div className="footer-text ">
            <p className="dark:text-white">
              Let's{" "}
              <span className="blue-highlight">
                <span className="footer-text dark:text-white">
                  work together
                </span>
              </span>{" "}
              on your next product.
            </p>
          </div>
          <div className="footer-links">
            <a href="#" className="text-[#1769FF]">
              Github
            </a>
            <a href="#" className="dark:text-white">
              Personal Blog
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
