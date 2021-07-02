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
      <div className="frontEndSkills skills">
        {frontEndSkills.map((skill) => (
          <p>{skill}</p>
        ))}
      </div>
      <h3>Back End</h3>
      <div className="backEndSkills skills">
        {backEndSkills.map((skill) => (
          <p>{skill}</p>
        ))}
      </div>
      <h3>Design</h3>
      <div className="designSkills skills">
        {designSkills.map((skill) => (
          <p>{skill}</p>
        ))}
      </div>
      <p className="recruiter">
        <span>Are you a recruiter?</span><br />I'm currently on the market for a remote, full-time
        position within the 75th Percentile of market Junior Developer salaries.
      </p>
      <div className="skillsBtns">
        <a
          href="https://www.linkedin.com/in/devandapaige/"
          rel="noreferrer"
          target="_blank"
        >
          <button>LinkedIn</button>
        </a>
        <a
          href="https://drive.google.com/file/d/1aK3E32O6mK1ENofCxlJpDy5VZBkoGcGn/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
        >
          <button>Resume</button>
        </a>
        {/*<a
          href=""
          rel="noreferrer"
          target="_blank"
        ><button>References</button></a>*/}
      </div>
    </div>
  );
}
export default Skills;
