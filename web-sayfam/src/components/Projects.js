function Projects() {
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
    <div className="bg-white">
      <div className="container">
        <h2>Projects</h2>
        <div>
          {projects.map((project, idx) => (
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div>
                {project.tags.map((tag) => (
                  <p>{tag}</p>
                ))}
              </div>
              <div>
                <a href={project.github}>View on Github</a>
                <a href={project.app}>Go to App →</a>
              </div>
              <img
                src={`./images/project-${idx + 1}.png`}
                alt={project.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
