import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";

function Skills() {
  const skills = ["JAVASCRIPT", "REACT", "REDUX", "NODE", "VS CODE", "FIGMA"];
  const { title } = useContext(DarkModeContext).data.skills;
  return (
    <>
      <div className="skills-section dark:bg-bg-dark-grey">
        <div className="container">
          <div className="yarim-daire ">
            <div className="yd-ic dark:border-[#525252]"></div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="skills-heading dark:text-white">{title}</h2>
            <div className="flex gap-12 flex-wrap">
              {skills.map((skill, idx) => (
                <div className="skill" key={idx}>
                  <img src={`./images/skills-${idx + 1}.png`} alt={skill} />
                  <p>{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grey-pill"></div>
      </div>
    </>
  );
}

export default Skills;
