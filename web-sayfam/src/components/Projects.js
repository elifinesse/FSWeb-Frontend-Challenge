function Projects() {
  const projectBG = ["bg-[#DDEEFE]", "bg-[#D9F6F1]"];
  const projectDarkBG = ["dark:bg-[#2D3235]", "dark:bg-[#495351]"];
  const projects = [
    {
      title: "Random Jokes",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
      tags: ["react", "vercel", "axios", "router"],
      github: "#",
      app: "#",
    },
    {
      title: "Are you bored",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
      tags: ["react", "redux", "vercel", "axios", "router"],
      github: "#",
      app: "#",
    },
  ];
  return (
    <div className="skills-section pb-10 bg-white dark:bg-bg-dark-grey">
      <div className="container">
        <h2 className="skills-heading text-center dark:text-white">Projects</h2>
        <div className="all-projects dark:text-white">
          {projects.map((project, idx) => (
            <div
              className={`
                ${projectBG[idx]} ${projectDarkBG[idx]} project-box
              `}
              key={idx}
            >
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <p className="dark:bg-[#525252]" key={i}>
                    {tag}
                  </p>
                ))}
              </div>
              <div className="links flex-1">
                <a href={project.github}>View on Github</a>
                <a href={project.app}>Go to App →</a>
              </div>
              <div className="self-end">
                <img
                  src={`./images/project-${idx + 1}.png`}
                  alt={project.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
