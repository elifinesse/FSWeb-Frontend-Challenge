function Skills() {
  const skills = ["JAVASCRIPT", "REACT", "REDUX", "NODE", "VS CODE", "FIGMA"];
  return (
    <div className="skills-section">
      <div className="container">
        <div className="yarim-daire">
          <div className="yd-ic"></div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="skills-heading">Skills</h2>
          <div className="flex gap-12 flex-wrap">
            {skills.map((skill, idx) => (
              <div className="skill">
                <img src={`./images/skills-${idx + 1}.png`} alt={skill} />
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
