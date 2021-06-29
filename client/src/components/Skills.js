function Skills() {
  const frontEndSkills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Bootstrap",
    "Reactstrap",
    "Python",
    "NPM",
    "Cypress.io",
    "Jest Testing",
  ];
  const backEndSkills = [
    "Node JS",
    "SQLite",
    "PostgreSQL",
    "Environment Variables",
    "DbDesigner",
  ];
  const designSkills = [
    "Figma",
    "Whimsical",
    "Responsive, Scalable Web Design",
    "Procreate",
    "Canva",
    "PicMonkey",
    "ShowIt",
    "Squarespace",
  ];
  return (
    <div id="skills">
      <h2>Skills</h2>
      <h3>Front End</h3>
      <div>
        {frontEndSkills.map((skill) => (
          <p className="frontEndSkills">{skill}</p>
        ))}
      </div>
      <h3>Back End</h3>
      <div>
        {backEndSkills.map((skill) => (
          <p className="backEndSkills">{skill}</p>
        ))}
      </div>
      <h3>Design</h3>
      <div>
        {designSkills.map((skill) => (
          <p className="designSkills">{skill}</p>
        ))}
      </div>
      <button>LinkedIn</button>
      <button>Resume</button>
      <button>References</button>
    </div>
  );
}
export default Skills;
